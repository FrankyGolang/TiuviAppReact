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
import ListItemButton from '@mui/material/ListItemButton';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import EmailIcon from '@mui/icons-material/Email';


function ToggleButtonTheme(props){

    const globalContext = useGlobalContext();
  
  
    return(
        <ListItem>
        <ListItemIcon>
            <IconButton sx={{ ml: 1 }}  
          color={globalContext.mode === "light" ?  "buttonActive": "buttonInactive"} 
          >
          {globalContext.mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        </ListItemIcon>
        <ListItemText 
        id="switch-list-label-toggleTheme" 
        primary={<PList color={globalContext.mode === "light" ?  "buttonActive": "buttonInactive"}>toggleTheme</PList>} />
        <Switch
          edge="end"
          onChange={globalContext.toggleTheme}
          checked={globalContext.mode === "light"}
          inputProps={{
            'aria-labelledby': 'switch-list-label-toggleTheme',
          }}
        />
      </ListItem>
    )
}
  
 function ToggleButtonVoicer(props){
  
    const globalContext = useGlobalContext();
  
  
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
      primary={<PList color={globalContext.toggleTheme === "on" ?  "buttonActive": "buttonInactive"}>Voice</PList>} />
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
  
    return(
          <ListItem>
          <ListItemIcon>
          <IconButton sx={{ ml: 1 }}  
            color={globalContext.recognition === "on" ?  "buttonActive": "buttonInactive"}>
              {globalContext.recognition === "on" ? <MicIcon /> : <MicOffIcon />}
          </IconButton>
          </ListItemIcon>
          <ListItemText id="switch-list-label-toggleRecognition" 
          primary={<PList color={globalContext.toggleTheme === "on" ?  "buttonActive": "buttonInactive"}>toggle Recognition</PList>} />
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


export default function Navigation(props){

  const globalContext = useGlobalContext();

    return(
      <>
        <List 
        sx={{ width: '100%', bgcolor: 'background.paper' }}
      >
        <ToggleButtonTheme />
        <ToggleButtonVoicer/>
        <ToggleButtonRecognition/>

      </List>

      <List 
      component="nav" 
      aria-label="main mailbox folders"
      sx={{ width: '100%', bgcolor: 'background.paper' }}>

        <ListItemButton
          selected={globalContext.menu === 'main'}
          onClick={(event) => globalContext.selectMenu(event, 'main')}
        >
          <ListItemIcon>
                    <HomeTwoToneIcon fontSize='large' />
            </ListItemIcon>
            <ListItemText primary="Paginas Principales" />

        </ListItemButton>

        <ListItemButton
          selected={globalContext.menu === 'mensajeria'}
          onClick={(event) => globalContext.selectMenu(event, 'mensajeria')}
        >
          <ListItemIcon>
            <EmailIcon fontSize='large'/>
          </ListItemIcon>
          <ListItemText primary="Mensajeria" />
        </ListItemButton>

      </List>
      </>)
  }