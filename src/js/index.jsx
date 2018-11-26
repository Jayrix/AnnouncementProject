import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root.jsx'
const isOnline = require('is-online');

//zmienne konfiguracyjne reload
const GET_URL = "https://jayrix.github.io/Announcement/"
// const STATUS_CHECK_MS = 300000;
// const PAGE_RELOAD_MS = 1800000;
const STATUS_CHECK_MS = 2000;
const PAGE_RELOAD_MS = 3000;
let requestingHTTPInProgress = false;

//funkcje odpowiedzialne za odswiezanie
function makeGetRequest(url, intervalID){
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

function reloadThePage(url,intervalID) {
    makeGetRequest(url,intervalID)
        .then(function (e) {
            //resolved
            console.log(e.target.status)
            if (e.target.status === 200) {
                //check if current url is on local drive or not, if true try switching to online
                if (window.location.href.startsWith("file:")){
                    console.log("switching to online");
                    window.location.assign(GET_URL);
                } else {
                    window.location.reload(true);
                    requestingHTTPInProgress = false;
                }
            } else {
                console.log("resolved but status is  " + e.target.status)
                reloadOncePerTime(reloadThePage, url, STATUS_CHECK_MS);
            }
        }, function (e) {
            //rejected
            console.log("error " + e.target.status)
            reloadOncePerTime(reloadThePage, url, STATUS_CHECK_MS);
        });
}



//render Roota i wywolanie odswiezania po sprawdzeniu polaczenia
document.addEventListener('DOMContentLoaded', function (){

    render(
        <Root/>,
        document.getElementById('root')
    );
    
    window.scroll(0,0);
    
    if (requestingHTTPInProgress){
        console.log("SKIPPING: Requests are being made with " + STATUS_CHECK_MS + " time gaps already.");
    } else {
        let reloadIntervalID;
        reloadIntervalID = setInterval(function(){
            isOnline().then(online => {
                if(online){
                    clearInterval(reloadIntervalID);
                    console.log("performing reload checks...................");
                    requestingHTTPInProgress = true;
                    reloadThePage(GET_URL);
                }else{
                    console.log("no internet connection");
                }
            });
        },PAGE_RELOAD_MS);
    }

});
