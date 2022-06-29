'use-strict'

import { useGlobalContext } from './options.js'
import { panels , panelsInactive} from './app/arraypanels.js'


export default function SelectPanel(props) {

    const globalContext = useGlobalContext();
    let SpecificMenu = {}
    
    if(panels.hasOwnProperty(globalContext.menu)){

        SpecificMenu = panels[globalContext.menu].panel;

        return <SpecificMenu  />;

    } 
   
    if (Object.keys(panels).length !== 0){

        const firstMenu = Object.keys(panels)[0]
        SpecificMenu = panels[firstMenu].panel;
        
        return <SpecificMenu  />;
    }

    if(panels.hasOwnProperty('main')){

        SpecificMenu = panels['main'].panel;

        return <SpecificMenu  />;
    }

    if(panelsInactive.hasOwnProperty('main')){

        SpecificMenu = panelsInactive['main'].panel;

        return <SpecificMenu  />;
    }
        
  }