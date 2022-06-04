'use-strict'
import callServer from './callServer.js';
import { sVoice ,Voicer, Reader } from './sVoice.js';
import React, { createContext } from 'react';



/**
 * Url globales
 */
const url     = window.location.host;
const viewNow = document.defaultView.location.pathname;

const lastRoute = document.defaultView.location.pathname.split("/");
const endRoute  = lastRoute[lastRoute.length-1];

const nameUser  = lastRoute[lastRoute.length-1].replaceAll('@', '');

const securUrl  =   (`https://` + url);


//Migrar localStorage a otro fichero
let themeMode = localStorage.getItem('themeMode');

console.log(themeMode)
if (themeMode === null) {

    themeMode = "light"
    localStorage.setItem('themeMode', 'light');

}

let Voice = localStorage.getItem('Voice');

console.log(Voice)
if (Voice === null) {

    Voice = "on"
    localStorage.setItem('themeMode', 'light');

}

//Contexto para javascript
export const Global = {
    SecureUrl:  (`https://` + url),
    SoundConfirmation: (securUrl + "/mp3/soundConfirmation.mp3"),
    SoundError: (securUrl + "/mp3/soundError.mp3"),
    DefaultView: (`https://` + viewNow) ,
    LastRoute: endRoute,
    NameUser:  nameUser,

    SecureEndpoint: (securUrl + "/app/"),
    UserLogin: (securUrl + "/app/login"),
    UserReferer: (securUrl + "/app/referer"),
    UserView:(securUrl + "/app/view"),

    mode: themeMode,
    toggleTheme: () => { },

    Voice: Voice,
    toggleVoice: () => { },

    
};

//Contexto para react
export const GlobalContext = createContext(Global);


export function callServerLogin(UserName , Password){

    const loginUser = new callServer(Global.UserLogin)
    loginUser.Method("HEAD")
    loginUser.Mode("cors")
    loginUser.Cache("no-cache")
    loginUser.Credentials("omit")
    loginUser.Headers("username", UserName)
    loginUser.Headers("Password", Password)
    loginUser.Redirect("error")
    loginUser.Referrer(Global.NameUser)
    loginUser.ReferrerPolicy("strict-origin-when-cross-origin")

    return  loginUser.GoCall()
}



function callAudio(Url){

    const AudioForm = new callServer(Url)
    AudioForm.Method("POST")
    AudioForm.Mode("cors")
    AudioForm.Cache("force-cache")
    AudioForm.Credentials("omit")
    AudioForm.Headers("range", "bytes=0")
    AudioForm.Redirect("follow")
    AudioForm.Referrer(Global.NameUser)
    AudioForm.ReferrerPolicy("strict-origin-when-cross-origin")

    return  AudioForm.GoCall()
}
async function playAudio(url){

    const responseAudio = await callAudio(url)
    const audioBuffer = await responseAudio.arrayBuffer()
    const ctx         = new AudioContext();

    const source      = ctx.createBufferSource();
    source.buffer     = await ctx.decodeAudioData(audioBuffer)
    source.connect(ctx.destination);
    source.start(0)
}


export function responseFormApp(responseStatus){

    if(responseStatus === 200){
        playAudio(Global.SoundConfirmation)
        return "success"
         
    } 

    if(responseStatus === 400){
    
        playAudio(Global.SoundError)  
        return "error"   
    }

}



//Exportaciones de otros scripts
export {sVoice, Voicer, Reader}