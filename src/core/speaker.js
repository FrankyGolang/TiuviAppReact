
/*
[
    "Google Deutsch",
    "Google US English",
    "Google UK English Female",
    "Google UK English Male",
    "Google español",
    "Google español de Estados Unidos",
    "Google français",
    "Google हिन्दी",
    "Google Bahasa Indonesia",
    "Google italiano",
    "Google 日本語",
    "Google 한국의",
    "Google Nederlands",
    "Google polski",
    "Google português do Brasil",
    "Google русский",
    "Google 普通话（中国大陆）",
    "Google 粤語（香港）",
    "Google 國語（臺灣）"
]
*/

class speaker {

    constructor() {
        this.synth =  window.speechSynthesis;
    /*
        this.voice
        this.voiceName
        this.volume 
        this.pitch 
        this.rate 
        this.speaker
    */
    }

    GetVoiceName(){

        const voices = this.synth.getVoices();
        let   voicesName = []
        for (let value of voices){
            
            voicesName.push(value.name)
        
        }
        return voicesName
    }


     SetVoice(name){

        this.voiceName = name

        const voices = this.synth.getVoices();
   
        let voice
        for (let value of voices){

            if (value.name == name){
              
                this.voice = value
                break
            }
            
        }
    }

    SetVolume(volume){

        if (volume > 100) {
            this.volume = 100
        }
        if (volume < 0) {
            this.volume = 0
        }
        this.volume = volume

    }

    SetPitch(pitch){

        if (pitch >= 20) {
            this.pitch = 2
        }
        if (pitch <= 1) {
            this.pitch = 0.1
        }
        this.pitch = pitch / 10
    }

    SetRate(rate){
        if (rate >= 20) {
            this.rate = 2
        }
        if (rate <= 5) {
            this.rate = 0.5
        }
        this.rate = rate / 10
    }

    CreateSpeaker(){
       
        const speaker = new SpeechSynthesisUtterance("");

        if (this.voice !== undefined){

            speaker.voice = this.voice;

        }
      
        speaker.volume = this.volume;
        speaker.pitch = this.pitch;
        speaker.rate = this.rate;
        this.speaker = speaker

    }

    SpeakApp(message ){

   
        if (this.voice == undefined){
   
            this.SetVoice(this.voiceName)
            this.speaker.voice = this.voice
        }

        this.speaker.text = message
        this.synth.speak(this.speaker);

    }

}


const speakSlow = new speaker()
speakSlow.SetVoice("Google français")
speakSlow.SetVolume(100)
speakSlow.SetPitch(9)
speakSlow.SetRate(7)
speakSlow.CreateSpeaker()


const speakNormal = new speaker()
speakNormal.SetVoice("Google français")
speakNormal.SetVolume(100)
speakNormal.SetPitch(9)
speakNormal.SetRate(9)
speakNormal.CreateSpeaker()


const speakFast = new speaker()
speakFast.SetVoice("Google français")
speakFast.SetVolume(100)
speakFast.SetPitch(9)
speakFast.SetRate(10)
speakFast.CreateSpeaker()


export function mSlow(message){

    speakSlow.SpeakApp(message)

}

export function mNormal(message){

    speakNormal.SpeakApp(message)

}

export function mFast(message){

    speakFast.SpeakApp(message)

}
