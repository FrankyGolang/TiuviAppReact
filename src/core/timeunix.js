'use-strict'




// clase
const unixHandle = {

    checkTimeUnix: function(number){
        
        if( typeof number !== 'number') return true
        if( typeof number < 0) return true

        return false
    },


    addSeconds: function(timeUnix, seconds) {

        if(this.checkTimeUnix(seconds)) return null;
        if(this.checkTimeUnix(timeUnix)) return null;

        return timeUnix + (1000 * seconds)
     
    },
    
     addMinutes: function(timeUnix, minutes) {
    
        if(this.checkTimeUnix(minutes)) return null;
        if(this.checkTimeUnix(timeUnix)) return null;

        return timeUnix + (1000 * 60 * minutes)
     
    },
    
     addHours: function(timeUnix, hours) {
    
        if(this.checkTimeUnix(hours)) return null;
        if(this.checkTimeUnix(timeUnix)) return null;

        return timeUnix + (1000 * 60 * 60 * hours)
     
    },
    
     addDays: function(timeUnix, days) {
    
        if(this.checkTimeUnix(days)) return null;
        if(this.checkTimeUnix(timeUnix)) return null;

        return timeUnix + (1000 * 60 * 60 * 24 *days)
     
    },
    seconds: function(seconds){
        return ( seconds)
    },
    minutes: function(minutes){
        return ( 60 * minutes)
    },
    hours:function(hours){
        return  ( 60 * 60 * hours)
    },
    days: function(days){
        return ( 60 * 60 * 24 *days)
    },

    timeunixLabel: function(timeunix){

  
        if(timeunix < 60){

            const label = timeunix === 1 ? 'segundo' : 'segundos'
            return timeunix + ' ' +  label
        }

        if(timeunix < (60 * 60)){

            const time = Math.round(timeunix / 60)
            const label = time === 1 ? 'minuto' : 'minutos'
    
            return time + ' ' +  label
        }

        if(timeunix < (60 * 60 * 24)){

            const time = Math.round(timeunix / (60 * 60))
            const label = time === 1 ? 'hora' : 'horas'
            
            return time + ' ' + label
        }

        if(timeunix < (60 * 60 * 24 * 365)){

            const time = Math.round(timeunix / (60 * 60 * 24))
            const label = time === 1 ? 'días' : 'día'
      
            return time + ' ' +  label
        }

        return 'desconocida'

    }
}

export default unixHandle

