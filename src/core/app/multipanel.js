'use-strict'
import { useGlobalContext } from '../options.js'

import Box from '@mui/material/Box';

import { navigation } from '../navigation.js'

//Nuevo menu
import Paper from '@mui/material/Paper';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackTwoToneIcon from '@mui/icons-material/ArrowBackTwoTone';

function Error404(){

  return ( <h1>Error 404</h1>);
}

export default function MultiPanel(props){

    const globalContext = useGlobalContext();

    let Panel = null
    if (props.panels.hasOwnProperty(globalContext.navigation)){

      Panel = props.panels[globalContext.navigation];

    } else if(navigation.hasOwnProperty(globalContext.navigation)){

      Panel = navigation[globalContext.navigation];

    }else {

      Panel = Error404;

    }
    
    return(
        <> 
        <Box sx={{
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            display: 'flex',
          }} >
  
           <Panel />

          </Box>
    
           
          
      <Paper variant="outlined"
      sx={{ position: 'fixed', 
      bottom: 0, 
      left: 0, 
      right: 0 
      }} elevation={3}>
        <BottomNavigation
        showLabels
        value={globalContext.navigation}
        onChange={globalContext.selectNavigation}
      >
        <BottomNavigationAction
              variant="main"
              label="menu"
              value="panel1"

              {...(globalContext.navigation !== "panel1" &&
              globalContext.panel === "panel1" ?
              {icon:<ArrowBackTwoToneIcon fontSize='large' /> }: {icon:<MenuIcon fontSize='large' />})}
         
            />

        <BottomNavigationAction
              variant="main"
              label={props.panel2Label}
              value="panel2"
              {...(globalContext.navigation !== "panel2" &&
              globalContext.panel === "panel2" ?
              {icon:<ArrowBackTwoToneIcon fontSize='large' /> }: {icon: props.panel2icon})}
          
            />
    
            <BottomNavigationAction
              variant="main"
              label={props.panel3Label}
              value="panel3"
              {...(globalContext.navigation !== "panel3" &&
              globalContext.panel === "panel3" ?
              {icon:<ArrowBackTwoToneIcon fontSize='large' /> }: {icon: props.panel3icon})}
          
            />
    
            <BottomNavigationAction
              variant="main"
              label={props.panel4Label}
              value="panel4"
              {...(globalContext.navigation !== "panel4" &&
              globalContext.panel === "panel4" ?
              {icon:<ArrowBackTwoToneIcon fontSize='large' /> }: {icon: props.panel4icon})}
          
            />
    
        {props.panel5icon !== undefined &&
                <BottomNavigationAction
                  variant="main"
                  label={props.panel5Label}
                  value="panel5"
                  {...(globalContext.navigation !== "panel5" &&
                  globalContext.panel === "panel5" ?
                  {icon:<ArrowBackTwoToneIcon fontSize='large' /> }: {icon: props.panel5icon})}
              
                  />
          
        }

      </BottomNavigation>
    </Paper>
    </>)
}