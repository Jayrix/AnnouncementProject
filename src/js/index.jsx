import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root.jsx'
const isOnline = require('is-online');

//zmienne konfiguracyjne odswiezania
const GET_URL = "https://jayrix.github.io/Announcement/";
const STATUS_CHECK_MS = 1800000;
const PAGE_RELOAD_MS = 7200000;
//const STATUS_CHECK_MS = 2000;
//const PAGE_RELOAD_MS = 3000;

//funkcje odpowiedzialne za odswiezanie
function makeGetRequest(url){
    return new Promise(function (resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open("GET",url,true);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send();
    })
}

function reloadOncePerTime(reloadFunction,url,ms){
    setTimeout(function(){
        reloadFunction(url)
    },ms);
}

function reloadThePage(url) {
    isOnline().then(online => {
        if(online){
            makeGetRequest(url)
                .then(function (e) {
                    //resolved
                    console.log(e.target.status)
                    if (e.target.status === 200) {
                        //check if current url is on local drive or not, if true switch to online
                        if (window.location.href.startsWith("file:")){
                            console.log("switching to online");
                            window.location.assign(url);
                        } else {
                            window.location.reload(true);
                        }
                    } else {
                        console.log("resolved but status is:  " + e.target.status)
                        reloadOncePerTime(reloadThePage, url, STATUS_CHECK_MS);
                    }
                }, function (e) {
                    //rejected
                    console.log("error " + e.target.status)
                    reloadOncePerTime(reloadThePage, url, STATUS_CHECK_MS);
                });
        }else{
            //not online
            console.log("no internet connection, retrying a check in " + STATUS_CHECK_MS + " ms");
            setTimeout(()=>{
                console.log("retrying online check");
                reloadThePage(url);
            },STATUS_CHECK_MS);
        }
    });  
}

//render Roota i wywolanie odswiezania po timeoucie
document.addEventListener('DOMContentLoaded', function (){

    render(
        <Root/>,
        document.getElementById('root')
    );
    
    window.scroll(0,0);

    //set Fullscreen mode in js because of issues with browser rescaling after some TVs being turned on with browser already loaded
    //in Firefox config full-screen-api.allow-trusted-requests-only needs to be FALSE
    //Compiz handled this by itself before
    //document.documentElement.requestFullscreen();
    //now wmctrl shell script handles this


    setTimeout(function(){
        reloadThePage(GET_URL);
    },PAGE_RELOAD_MS);
    
});
