'use-strict'


export default class callServer {

    constructor(url) {
        this.url = url;
        this.urlFeth = url
        this.init = {}
    }

    UrlFeth(params){

        this.urlFeth = this.url + "?" + params

    }

    Method(method){
        
        switch (method) {
            case "GET":
                this.init.method = method
                return true
            case "POST":
                this.init.method = method
                return true
            case "PUT":
                this.init.method = method
                return true
            case "DELETE":
                this.init.method = method
                return true
            case "HEAD":
                this.init.method = method
                return true         
            default:
                return false
        }
    }

    Mode(mode){

        switch (mode) {
            case "no-cors":
                this.init.mode = mode
                return true
            case "cors":
                this.init.mode = mode
                return true
            case "same-origin":
                this.init.mode = mode
                return true     
            default:
                return false
        }
    }

     // *default, no-cache, reload, force-cache, only-if-cached 
    Cache(cache){
       
        switch (cache) {
            case "default":
                this.init.cache = cache
                return true
            case "no-cache":
                this.init.cache = cache
                return true
            case "reload":
                this.init.cache = cache
                return true   
            case "force-cache":
                this.init.cache = cache
                return true   
            case "only-if-cached":
                this.init.cache = cache
                return true       
            default:
                return false
        }
    }
 
    Credentials(credentials){
       
        switch (credentials) {
            case "include":
                this.init.credentials = credentials
                return true
            case "same-origin":
                this.init.credentials = credentials
                return true
            case "omit":
                this.init.credentials = credentials
                return true       
            default:
                return false
        }
    }
    Headers(key , value){

        if (!this.init.hasOwnProperty("headers")){
            this.init.headers = {}
            this.init.headers[key] = value
            return true
        }
        this.init.headers[key] = value
        return true
    }

    Redirect(redirect){

        switch (redirect) {
            case "manual":
                this.init.redirect = redirect
                return true
            case "follow":
                this.init.redirect = redirect
                return true
            case "error":
                this.init.redirect = redirect
                return true       
            default:
                return false
        }
    }

    Integrity(integrity){
        
        this.init.integrity = integrity
        return true
    }
   
    Keepalive(timeout, maxTime){
        
        this.init.keepalive = "timeout=" + timeout + ", max=" + maxTime
        return true
    }

    Referrer(referrer){
        
        this.init.referrer = referrer
        return true
    }

    ReferrerPolicy(referrerPolicy){

        switch (referrerPolicy) {
            case "no-referrer":
                this.init.referrerPolicy = referrerPolicy
                return true
            case "no-referrer-when-downgrade":
                this.init.referrerPolicy = referrerPolicy
                return true
            case "origin":
                this.init.referrerPolicy = referrerPolicy
                return true     
            case "origin-when-cross-origin":
                this.init.referrerPolicy = referrerPolicy
                return true   
            case "same-origin":
                this.init.referrerPolicy = referrerPolicy
                return true   
            case "strict-origin":
                this.init.referrerPolicy = referrerPolicy
                return true     
            case "strict-origin-when-cross-origin":
                this.init.referrerPolicy = referrerPolicy
                return true   
            case "unsafe-url":
                this.init.referrerPolicy = referrerPolicy
                return true   
            default:
                return false
        }
    }


    SignalAbort(){

        if ( !this.hasOwnProperty("signalAbort")  ){

            this.signalAbort = new AbortController();
  
            this.init.signal = this.signalAbort
            return true
        }
        return false
     }

     OnSignalAbort(){

        if ( !this.hasOwnProperty("signalAbort")  ){

            this.signalAbort.abort()
            return true
        }
        return false
     }



    Body(body){
        
        this.init.body = body
    }

    DataToUrl(key , value){
        
        if ( !this.hasOwnProperty("dataToUrl")  ){

            this.dataToUrl = new URLSearchParams();
            this.dataToUrl.set(key, value);
            this.UrlFeth(this.dataToUrl.toString())
            return true
        }

        this.dataToUrl.set(key, value);
        this.UrlFeth(this.dataToUrl.toString())
        return true
        
    }

    DataToBody(key , value){
        
        if ( !this.hasOwnProperty("dataToBody")  ){
   
            this.dataToBody = new URLSearchParams();
            this.dataToBody.set(key, value);
            this.Body(this.dataToBody.toString())
            return true
        }

        this.dataToBody.set(key, value);
        this.Body(this.dataToBody.toString())
        return true
        
    }


    FormDataToBody(key , value) {

        if ( !this.hasOwnProperty("formDataToBody")  ){

            this.formDataToBody = new FormData();
            this.formDataToBody.set( key , value)
            this.Body(this.formDataToBody)
            return true
        }

        this.formDataToBody.set(key, value);
        this.Body(this.formDataToBody)
        return true
    }

    JsonDataToBody(json){

        this.Headers('Content-Type', 'application/json' )
        this.Body(JSON.stringify(json))
       
    }

    BlobDataToBdoy(blob){

        this.Body(new Blob(blob))

    }

    ArrayDataToBody(blob){

        this.Body(new Uint8Array(blob))

    }

    ArraySliceDataToBody(blob , start , end){

        var uint8 = new Uint8Array(blob)
        
        this.Body(uint8.slice(start,end))

    }

    GoCall(){
        return fetch(this.urlFeth, this.init)
    }
}


