'use-strict'
let error            = undefined
let speechSynthesis  = undefined
let utterance        = undefined
let lang             = undefined
let voices           = undefined
let name             = undefined

try {
    
    speechSynthesis = window.speechSynthesis

  } catch (errorApi) {
   console.log(errorApi)
    error = errorApi
  }

 

if (speechSynthesis !== undefined){

    if (speechSynthesis.speaking === true){

        speechSynthesis.cancel()
    
    }

    
    try {
    
        utterance = new SpeechSynthesisUtterance();
    
      } catch (errorApi) {
        console.log(errorApi)
        error = errorApi
      }
      
      utterance.onerror = (event) => {
        console.log(event)
      }

    utterance.volume = 100
    utterance.pitch = 0.9
    utterance.rate = 0.9
    utterance.text = ""
    lang = "es-ES"
    name = "Google español"
    voices = speechSynthesis.getVoices();
    
    if (voices.length > 0) {
    
        utterance.voice = voices.find(voices => voices.lang === lang || voices.name === name)
    
    }
    
    //pass by async
    if (voices.length === 0) {
    
        //Tiempo asincrono 
        speechSynthesis.onvoiceschanged = () => {
    
            voices = speechSynthesis.getVoices();
        
            utterance.voice = voices.find(voices => voices.lang === lang || voices.name === name)
        
            sVoice.Voices = voices
            
        }
    }

}




//Cache de mensajes, para no repetirlos
let Messages = []
export const sVoice = {
    Utterance: utterance,
    Voices: voices,
    SetVolume: (volume) => {
        console.log(utterance)
        utterance.volume = volume
    },
    SetPitch: (pitch) => {
        utterance.pitch = pitch
    },
    DefaultRate: (rate) => {
        utterance.rate = 0.9
    },
    SetRate: (rate) => {
        utterance.rate = rate
    },

    Speaker : (message) => {

      
        utterance.text = message

        if (speechSynthesis.pending === true) {
            return
        }

        if (speechSynthesis.speaking === true){

            return
        }

        const found = Messages.find(element => element === message);
        if (found !== undefined){
            return
        }
        Messages.push(message);
      
        speechSynthesis.speak(utterance);
        
    },

    SpeakerSlow : (message) => {

        sVoice.SetRate(0.8) 
        sVoice.Speaker(message);
        sVoice.DefaultRate()
    },
    SpeakerFast : (message) => {

        sVoice.SetRate(1) 
        sVoice.Speaker(message);
        sVoice.DefaultRate()
    }

}

export function reader(event){

    if (event.target.innerText !== ""){

        sVoice.Speaker(event.target.innerText)
    }else if(event.target.dataset.voice !== ""){

        sVoice.Speaker(event.target.dataset.voice) 
    }
}

