'use-strict'

//Contexto Global
import { useGlobalContext} from './options.js'

//Iconos theme dark light
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

//Iconos recognition on off
import HearingIcon from '@mui/icons-material/Hearing';
import HearingDisabledIcon from '@mui/icons-material/HearingDisabled';

//Iconos voice
import MicIcon from '@mui/icons-material/Mic';
import MicOffIcon from '@mui/icons-material/MicOff';

//Lista de navegacion pestaña 1
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import { PList } from './typography.js'

//Test navegacion
import { panels , panelsInactive } from './app/arraypanels.js'

//SelectAllMenu
import React, { useState } from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import AppRegistrationTwoToneIcon from '@mui/icons-material/AppRegistrationTwoTone';

function ToggleButtonTheme(props){

    const globalContext = useGlobalContext();
    const modeTheme = globalContext.userOptions.modeTheme() === "light" ? true : false;

    return(
        <ListItem>
        <ListItemIcon>
            <IconButton sx={{ ml: 1 }}  
          color={modeTheme ?  "buttonActive": "buttonInactive"} 
          >
          {modeTheme ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        </ListItemIcon>
        <ListItemText 
        id="switch-list-label-toggleTheme" 
        primary={<PList color={modeTheme ?  "buttonActive": "buttonInactive"}>toggleTheme</PList>} />
        <Switch
          edge="end"
          onChange={globalContext.toggleTheme}
          checked={modeTheme}
          inputProps={{
            'aria-labelledby': 'switch-list-label-toggleTheme',
          }}
        />
      </ListItem>
    )
}
  
 function ToggleButtonVoicer(props){
  
    const globalContext = useGlobalContext();
    const modeTheme = globalContext.userOptions.modeTheme() === "light" ? true : false;

  
    return(
      <ListItem>
      <ListItemIcon>
          <IconButton sx={{ ml: 1 }}  
          color={globalContext.voice === "on" ?  "buttonActive": "buttonInactive"}>
            {globalContext.voice === "on" ? <HearingIcon /> : <HearingDisabledIcon />}
        </IconButton>
      </ListItemIcon>
      <ListItemText 
      id="switch-list-label-voice" 
      primary={<PList color={modeTheme ?  "buttonActive": "buttonInactive"}>Voice</PList>} />
      <Switch
        edge="end"
        onChange={globalContext.toggleVoice}
        checked={globalContext.voice === "on"}
        inputProps={{
          'aria-labelledby': 'switch-list-label-voice',
        }}
      />
    </ListItem>
    )
  }
  
  function ToggleButtonRecognition (props){
  
    const globalContext = useGlobalContext();
    const modeTheme = globalContext.userOptions.modeTheme() === "light" ? true : false;

    return(
          <ListItem>
          <ListItemIcon>
          <IconButton sx={{ ml: 1 }}  
            color={globalContext.recognition === "on" ?  "buttonActive": "buttonInactive"}>
              {globalContext.recognition === "on" ? <MicIcon /> : <MicOffIcon />}
          </IconButton>
          </ListItemIcon>
          <ListItemText id="switch-list-label-toggleRecognition" 
          primary={<PList color={modeTheme ?  "buttonActive": "buttonInactive"}>toggle Recognition</PList>} />
          <Switch
            edge="end"
            onChange={globalContext.toggleRecognition}
            checked={globalContext.recognition === "on"}
            inputProps={{
              'aria-labelledby': 'switch-list-label-toggleRecognition',
            }}
          />
        </ListItem>
    )
  }


  function SelectAllMenus(props){

    const globalContext = useGlobalContext();
  
    return(
    <ListItemButton
      onClick={(event) => globalContext.selectNavigation(event, 'selectMenus')}
      >
        <ListItemIcon>
          <AppRegistrationTwoToneIcon fontSize='large' />
        </ListItemIcon>
        <ListItemText primary="Elige tus menus" />
      </ListItemButton>
    )
  }


function ListPanels(props){

  let arrayPanelList = []

  for (let value in panels){

    const SpecificMenuList = panels[value].panelList;

    arrayPanelList.push(<SpecificMenuList key={value} />)

  }

  return (
    <List 
    component="nav" 
    aria-label="main mailbox folders"
    sx={{ width: '100%', bgcolor: 'background.paper' }}>
   <SelectAllMenus />
    {arrayPanelList}

    </List>)
}

//Hacer boton para ir a la seleccion de menus.
export function Navigation(){

    return(
      <>
        <List 
        sx={{ width: '100%', bgcolor: 'background.paper' }}
      >
        <ToggleButtonTheme />
        <ToggleButtonVoicer/>
        <ToggleButtonRecognition/>
     
      </List>

        <ListPanels />
      
      
      </>)
  }





export function SelectMenus(){

  const globalContext = useGlobalContext();

  const [arrayPanelList, setMenuActive] = useState(<ActiveList />);

  const [arrayPanelListInactive, setMenuInactive] = useState(<InactiveList />);


  function offMenu (event, menu) {

    if(globalContext.menusActive.length === 1){

      return
    }
    
    if(globalContext.menu === menu){
      return
    }

    if (globalContext.menusActive.hasOwnProperty(menu)){

      delete globalContext.menusActive[menu]

      const menusActiveJson = JSON.stringify(globalContext.menusActive);
      localStorage.setItem('menusActive', menusActiveJson);
     
      panelsInactive[menu] = panels[menu]
      delete panels[menu]
     
      setMenuInactive(<InactiveList />)
      setMenuActive(<ActiveList />)

    }

  }

  function onMenu (event, menu) {

    if (!globalContext.menusActive.hasOwnProperty(menu)){

      globalContext.menusActive[menu] = true

      const menusActiveJson = JSON.stringify(globalContext.menusActive);
      localStorage.setItem('menusActive', menusActiveJson);
      
      panels[menu] = panelsInactive[menu]
      delete panelsInactive[menu]

      setMenuInactive(<InactiveList />)
      setMenuActive(<ActiveList />)


    }

  }

  function ActiveList(){

    let arrayPanelList = []
   
    for (let value in panels){
    
      const SpecificMenuList = panels[value].panelSelect;
  
      arrayPanelList.push(<SpecificMenuList onClick={(event) => offMenu(event, value)} key={value} />)
  
    }
  
    return (<>
    {arrayPanelList}
    </>)
  }
  
  function InactiveList(){
  
    let arrayPanelListInactive = []
    for (let value in panelsInactive){
  
      const SpecificMenuList = panelsInactive[value].panelSelect;
  
      arrayPanelListInactive.push(<SpecificMenuList onClick={(event) => onMenu(event, value)} key={value} />)
  
    }
  
    return(<>{arrayPanelListInactive}</>)
  }

 

 

  return(
    <>
      <List 
      sx={{ width: '100%', bgcolor: 'background.paper' }}>
 
    <h1>Paneles Activos</h1>
    {arrayPanelList}

    <h1>Paneles Inactivos</h1>
    {arrayPanelListInactive}

    </List>

    </>)
}


export const navigation = {
  panel1: Navigation,
  selectMenus: SelectMenus,
};