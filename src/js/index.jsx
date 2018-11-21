import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root.jsx'
const isOnline = require('is-online');

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
    makeGetRequest(url)
        .then(function (e) {
            //resolved
            console.log(e.target.status)
            if (e.target.status === 200) {
                window.location.reload(true);
            } else {
                console.log("resolved but status is  " + e.target.status)
                reloadOncePerTime(reloadThePage, url, 600000);
            }
        }, function (e) {
            //rejected
            console.log("error " + e.target.status)
            reloadOncePerTime(reloadThePage, url, 600000);
        });
}



//render Roota i wywolanie odswiezania po sprawdzeniu polaczenia
document.addEventListener('DOMContentLoaded', function (){

    render(
        <Root/>,
        document.getElementById('root')
    );
    
    window.scroll(0,0);
    
    let reloadIntervalID;
    reloadIntervalID = setInterval(function(){
        isOnline().then(online => {
            if(online){
                clearInterval(reloadIntervalID);
                console.log("performing reload...................");
                reloadThePage("https://jayrix.github.io/TestEnvironment/");
            }else{
                console.log("Brak połączenia internetowego");
            }
        });
    },1800000);

});
