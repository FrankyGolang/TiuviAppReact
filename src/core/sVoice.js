
if (speechSynthesis.speaking === true){

    speechSynthesis.cancel()

}

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


export function Voicer(props){
    

    function Reader(event){
        console.log(event)

        if (event.target.innerText !== ""){

            sVoice.Speaker(event.target.innerText)
        }else if(event.target.ariaLabel !== ""){

            sVoice.Speaker(event.target.ariaLabel) 
        }
    }

    //Propiedades comunes
    let className = ""
    props.id ??= "";
    props.status ??= "";
    props.voicerText ??= "";
    props.className ??= "";

    switch (props.element) {
        case "p":
        className = "text".concat( " ", props.className, " " , props.status)
        return (
            <props.element 
                id={props.id}
                onClick={Reader}
                className={className} >
                    {props.voicerText}
            </props.element>
        )
        case "h1": case "h2": case "h3": case "h4": case "h5": case "h6": case "header": 
        className = "title".concat( " ", props.className, " " , props.status)
        return (
            <props.element 
                id={props.id}
                onClick={Reader}
                className={className} >
                    {props.voicerText}
            </props.element>
        )
   
        case "button":
        className='title button'.concat( " ", props.className, " " , props.status)
        return (
            <props.element 
                id={props.id}
                onMouseEnter={Reader}
                onFocus={Reader}
                onClick={props.onClick}
                className={className} >
                    {props.voicerText}
            </props.element>
        )
        case "input": 

        props.name ??= "";
        props.type ??= "";
        props.defaultValue ??= "";
        props.placeholder ??= "";
        props.classLabel ??= "";

        className='text camposform'.concat( " ", props.className, " " , props.status)
        const classLabel = 'labelform text'.concat(" ", props.classLabel)
         
 
        return (
            <>
                <label 
                htmlFor={props.id} 
                className={classLabel}
                onClick={Reader}
                >{props.textLabel}</label>

                <props.element 
                id={props.id}
                className={className}
                name={props.name}
                type={props.type}
                autocomplete={props.autocomplete}
                defaultValue={props.defaultValue}
                placeholder={props.placeholder}
                    aria-label={props.voicerText}
                    onFocus={Reader}
                    onClick={Reader}
                    onInput={props.onInput}
                    onKeyPress={props.onKeyPress}
                />
           </>
        )
    }




}
