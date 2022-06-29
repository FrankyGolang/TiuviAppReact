'use-strict'
import callServer from './callServer.js';
import React, { createContext, useContext } from 'react';

//Manejo de local storage
import userOptions from './localStorage/userOptions.js';

import viewerOptions from './localStorage/viewerOptions.js';


/**
 * Url globales
 */
const url = window.location.host;
const viewNow = document.defaultView.location.pathname;

const lastRoute = document.defaultView.location.pathname.split("/");
const endRoute = lastRoute[lastRoute.length - 1];

const nameUser = lastRoute[lastRoute.length - 1].replaceAll('@', '');

const securUrl = (`https://` + url);







let voice = localStorage.getItem('voice');
if (voice === null || voice === undefined) {

    voice = "on"
    localStorage.setItem('voice', 'on');

}

let recognition = localStorage.getItem('recognition');
if (recognition === null || recognition === undefined) {

    recognition = "on"
    localStorage.setItem('recognition', 'on');

}




let navigation = localStorage.getItem('navigation');
if (navigation === null || navigation === undefined) {

    navigation = "3"
    localStorage.setItem('navigation', '3');

}

let menu = localStorage.getItem('menu');
if (menu === null || menu === undefined) {

    menu = "main"
    localStorage.setItem('menu', 'main');

}


let menusActive = localStorage.getItem('menusActive');

function setMenuDefault(){

    let menuDefault =  {
        main: true,
        mensajeria: true,
        imagen: true,
        video: true,
        //  musica:true 
    }
    const menusActiveJson = JSON.stringify(menuDefault);
    localStorage.setItem('menusActive', menusActiveJson);
}



if (menusActive === null || menusActive === undefined ) {

    setMenuDefault()

} 

menusActive = JSON.parse(menusActive)

if (Object.keys(menusActive).length === 0){

    setMenuDefault()
}


let panel = localStorage.getItem('panel');
if (panel === null || panel === undefined) {

    menu = "panel1"
    localStorage.setItem('panel', 'panel1');

}


function isPanel(str) {

    switch (str) {
        case 'panel1':
            return true;
        case 'panel2':
            return true;
        case 'panel3':
            return true;
        case 'panel4':
            return true;
        case 'panel5':
            return true;
        default:
            return false;
    }
}



let token = localStorage.getItem('token');
if (token === null || token === undefined ) {

    token = "null"
    localStorage.setItem('token', 'null');

}






/*
{  
    icon:   <AcUnitIcon fontSize='large' />,
    //	'filled' | 'outlined' | 'standard' | string
    variant:"filled",
    //error , warning , info , success
    severity:'warning',
    title:'Titulo',
    message:'Mensaje de prueba', 
}
*/ 
const messageAlerts = [{  
    message:'Mensaje de prueba uno', 
},{  
    message:'Mensaje de prueba dos', 
}]

//Contexto para javascript
export const global = {
    secureUrl: (`https://` + url),
    soundConfirmation: (securUrl + "/mp3/soundConfirmation.mp3"),
    soundError: (securUrl + "/mp3/soundError.mp3"),
    defaultView: (`https://` + viewNow),
    lastRoute: endRoute,
    nameUser: nameUser,

    secureEndpoint: (securUrl + "/app/"),
    userLogin: (securUrl + "/app/login"),
    userReferer: (securUrl + "/app/referer"),
    userView: (securUrl + "/app/view"),

    userOptions: userOptions,
    toggleTheme: () => { },

    viewerOptions: viewerOptions,
    accessViewer: () => {},

    voice: voice,
    toggleVoice: () => { },

    recognition: recognition,
    toggleRecognition: () => { },

    menusActive: menusActive,
    selectMenusActive: () => { },

    menu: menu,
    selectMenu: () => { },

    navigation: navigation,
    selectNavigation: () => { },

    panel: panel,
    isPanel: isPanel,

    token: token,
    setToken: () => { },

    message: messageAlerts,
    setMessage: () => { },
};

//Contexto para react
export const GlobalContext = createContext(global);
export function useGlobalContext() {

    return useContext(GlobalContext)

}

export function callServerLogin(UserName, Password) {

    const loginUser = new callServer(global.userLogin)
    loginUser.Method("HEAD")
    loginUser.Mode("cors")
    loginUser.Cache("no-cache")
    loginUser.Credentials("omit")
    loginUser.Headers("username", UserName)
    loginUser.Headers("password", Password)
    loginUser.Redirect("error")
    loginUser.Referrer(global.nameUser)
    loginUser.ReferrerPolicy("strict-origin-when-cross-origin")

    return loginUser.GoCall()
}



function callAudio(Url) {

    const AudioForm = new callServer(Url)
    AudioForm.Method("POST")
    AudioForm.Mode("cors")
    AudioForm.Cache("force-cache")
    AudioForm.Credentials("omit")
    AudioForm.Headers("range", "bytes=0")
    AudioForm.Redirect("follow")
    AudioForm.Referrer(global.nameUser)
    AudioForm.ReferrerPolicy("strict-origin-when-cross-origin")

    return AudioForm.GoCall()
}
async function playAudio(url) {

    const responseAudio = (await callAudio(url)).response
    const audioBuffer = await responseAudio.arrayBuffer()
    const ctx = new AudioContext();

    const source = ctx.createBufferSource();
    source.buffer = await ctx.decodeAudioData(audioBuffer)
    source.connect(ctx.destination);
    source.start(0)
}


export function responseFormApp(responseStatus) {

    if (responseStatus === 200) {
        playAudio(global.soundConfirmation)
        return "success"

    }

    if (responseStatus === 400) {

        playAudio(global.soundError)
        return "error"
    }

}

