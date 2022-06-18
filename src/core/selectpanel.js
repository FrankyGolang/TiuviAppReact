'use-strict'

import { useGlobalContext } from './options.js'
import { panels } from './app/arraypanels.js'


export default function SelectPanel(props) {

    const globalContext = useGlobalContext();
    let SpecificMenu = {}
    if(panels.hasOwnProperty(globalContext.menu)){

        SpecificMenu = panels[globalContext.menu].panel;
    } else {

        SpecificMenu = panels['main'].panel;
    }
    

    return <SpecificMenu  />;
  }