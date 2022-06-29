'use-strict'




// clase
const unixHandle = {


    //Añadidas despues
    timeUnixSet:  Date.now(),
    timeUnixUpdate: null,

    idCounter: null,
    counter: 0,
    exe: null,

    resetTimeUnixUpdate: function(){
        this.timeUnixUpdate = null
    },

    checkTimeUnix: function(number){
        
        if( typeof number !== 'number') return true
        if( typeof number < 1) return true

        return false
    },

    newTimeUnix: function(){

        this.timeUnixSet    = Date.now();
        this.resetTimeUnixUpdate()
    },

    setTimeUnix: function(unix) {

        this.timeUnixSet = unix;
        this.resetTimeUnixUpdate()
    },

    switchTime: function (){

        if (this.timeUnixUpdate !== null){

            return this.timeUnixUpdate;

        }else if(this.timeUnixSet !== null){

            return this.timeUnixSet;

        }else {

            return 0;
        }
    },

    addSeconds: function( seconds) {

        if(this.checkTimeUnix(seconds)) return false;

        this.timeUnixUpdate = this.switchTime() + (1000 * seconds)
     
    },
    
     addMinutes: function( minutes) {
    
        if(this.checkTimeUnix(minutes)) return false;

        this.timeUnixUpdate = this.switchTime() + (1000 * 60 * minutes)
     
    },
    
     addHours: function( hours) {
    
        if(this.checkTimeUnix(hours)) return false;

        this.timeUnixUpdate = this.switchTime() + (1000 * 60 * 60 * hours)
     
    },
    
     addDays: function( days) {
    
        if(this.checkTimeUnix(days)) return false;

        this.timeUnixUpdate = this.switchTime() + (1000 * 60 * 60 * 24 *days)
     
    },

    counterBack: function(seconds, exe){

        this.counter = seconds;
        this.exe     = exe;

        this.idCounter = setInterval(() => {

            this.counter = this.counter -10;

            if (this.counter < 0){

                clearInterval(this.idCounter);
                this.exe !== null && this.exe()
            }

        } ,10000)
            
    },


    getUnix: function(){

        return this.switchTime()

    },

    transformToDate:function(){
        
        return new Date(this.switchTime())

    },
}

export default unixHandle

