'use-strict'

//Contexto
import { useGlobalContext } from './options.js'

//Lector de textos
import { reader } from './sVoice.js'

//REcognition imports
import { Recognition } from "./recognition.js"

//Material ui
import { OutlinedInput } from '@mui/material';

//    {...(Global.Voice === "on" && { onFocus: reader})}









export function InputOutlined(props) {

    const Global = useGlobalContext();

    return (
        <OutlinedInput
            {...props}
            {...(Global.recognition === "on" && { endAdornment: 
                    <>
                            {props.endAdornment ? props.endAdornment : null}
                            <Recognition  update={props.update} />
                    </>,
                }
            )}
            
            onFocus={Global.voice === "on" ? reader : undefined}
        />
    )
}



