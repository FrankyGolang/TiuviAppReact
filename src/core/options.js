'use-strict'
import callServer from './callServer.js';

/**
 * Url globales
 */
const url     = window.location.host;
const viewNow = document.defaultView.location.pathname;

const lastRoute = document.defaultView.location.pathname.split("/");
const endRoute  = lastRoute[lastRoute.length-1];
const nameUser  = lastRoute[lastRoute.length-1].replaceAll('@', '');
const securUrl  =   (`https://` + url);



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
};


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


