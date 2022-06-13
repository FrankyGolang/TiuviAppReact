'use-strict'

import { useGlobalContext } from './options.js'

import  MainPanel  from './app/main/mainpanel.js'
import MensajeriaPanel  from './app/mensajeria/mensajeria.js'

export default function SelectPanel(props){

    const globalContext = useGlobalContext();

    switch (globalContext.menu) {

        case 'mensajeria':
             return (<MensajeriaPanel />)
    
        default:
            return(<MainPanel />)
      
    }
}