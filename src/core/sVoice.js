
const utterance = new SpeechSynthesisUtterance();
utterance.volume = 100
utterance.pitch = 0.9
utterance.rate = 0.9
utterance.text = ""
let lang = "fr-FR" , name = "Google français"
let voices = speechSynthesis.getVoices();
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
    SetRate: (rate) => {
        utterance.rate = rate
    },
    Speaker : (message) => {
        console.log(utterance)
        utterance.text = message
        speechSynthesis.speak(utterance);
    }
}



