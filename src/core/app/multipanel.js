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



export default function MultiPanel(props){

    const globalContext = useGlobalContext();

    let Panel = null
    if (props.panels.hasOwnProperty(globalContext.navigation)){

      Panel = props.panels[globalContext.navigation];

    } else if(navigation.hasOwnProperty(globalContext.navigation)){

      Panel = navigation[globalContext.navigation];

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
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
        showLabels
        value={globalContext.navigation}
        onChange={globalContext.selectNavigation}
      >
        <BottomNavigationAction
              variant="main"
              label="menu"
              value="panel1"
              {...(globalContext.navigation === "panel1" && {icon:<MenuIcon fontSize='large' />})}
              {...(globalContext.navigation !== "panel1" && {icon:<ArrowBackTwoToneIcon fontSize='large' />})}
         
            />

        <BottomNavigationAction
              variant="main"
              label={props.panel2Label}
              value="panel2"
              icon={props.panel2icon}
            />
    
            <BottomNavigationAction
              variant="main"
              label={props.panel3Label}
              value="panel3"
              icon={props.panel3icon}
            />
    
            <BottomNavigationAction
              variant="main"
              label={props.panel4Label}
              value="panel4"
              icon={props.panel4icon}
            />
    
        {props.panel5icon !== undefined &&
                <BottomNavigationAction
                  variant="main"
                  label={props.panel5Label}
                  value="panel5"
                  icon={props.panel5icon}
                />
          
        }

      </BottomNavigation>
    </Paper>
    </>)
}