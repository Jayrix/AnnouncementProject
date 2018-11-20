import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root.jsx'



function makeGetRequest(url){
    return new Promise(function (resolve,reject){
        let xhr = new XMLHttpRequest();
        xhr.open("GET",url,true);
        xhr.onload = resolve;
        xhr.onerror = reject;
        xhr.send(null);
    })
}

function reloadOncePerTime(reloadFunction,url,ms){
    setTimeout(function(){
        reloadFunction(url)
    },ms);
}

function reloadThePage(url){
    makeGetRequest(url)
        .then(function(e){
            //resolved
            console.log(e.target.status)
            if (e.target.status === 200){
                window.location.reload(true);
            }else{
                //console.log("resolved but not 200 " + e.target.status)
                reloadOncePerTime(reloadThePage,url,3600000);
            }
        }, function(e){
            //rejeceted
            console.log("error " + e.target.status)
            reloadOncePerTime(reloadThePage,url,3600000);
        });
}


document.addEventListener('DOMContentLoaded', function (){

    render(
        <Root/>,
        document.getElementById('root')
    );

    window.scroll(0,0);

    setTimeout(function(){
        console.log("performing reload...................");
        reloadThePage("https://jayrix.github.io/Announcement/");
    },3600000);

});
