'use-strict'

import  panelMain   from './main/mainpanel.js'
import  panelMensajeria   from './mensajeria/mensajeria.js'
import  panelMusica   from './musica/musica.js'
import  panelVideo   from './video/video.js'
import  panelImage   from './imagen/imagen.js'


const panelsArray = [
    panelMain,
    panelMensajeria,
    panelImage, 
    panelVideo, 
    panelMusica,
]

export const panels = {};
export const panelsInactive = {};

const menusActiveJson = localStorage.getItem('menusActive')
const menusActive = JSON.parse(menusActiveJson)

for (let value in panelsArray){

    if (menusActive.hasOwnProperty(panelsArray[value].name)){

        panels[panelsArray[value].name] = {

            panel: panelsArray[value].panel,
            panelList: panelsArray[value].panelList,
            panelSelect: panelsArray[value].panelSelect,
        } 

    } else {

        panelsInactive[panelsArray[value].name] = {

            panel: panelsArray[value].panel,
            panelList: panelsArray[value].panelList,
            panelSelect: panelsArray[value].panelSelect,
        } 

    }
  
}

