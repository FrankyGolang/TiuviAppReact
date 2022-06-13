'use-strict'
import { useGlobalContext } from '../options.js'

import Box from '@mui/material/Box';

import Navigation from '../navigation.js'

//Nuevo menu
import Paper from '@mui/material/Paper';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import BottomNavigation from '@mui/material/BottomNavigation';
import MenuIcon from '@mui/icons-material/Menu';




export default function MultiPanel(props){

    const globalContext = useGlobalContext();

    return(
        <> 
        <Box sx={{
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            display: globalContext.navigation === "1"? 'flex': "none",
          }} >
           
           <Navigation />
             
          </Box>
    
    
          <Box sx={{
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            display: globalContext.navigation === "2"? 'flex': "none",
          }} >

            {props.panel2}
        
          </Box>
    
       
            <Box sx={{
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            display: globalContext.navigation === "3"? 'flex': "none",
          }} >
              {props.panel3}
             
            </Box>
    
            
          <Box sx={{
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            display: globalContext.navigation === "4"? 'flex': "none",
          }} >
            
            {props.panel4}
          </Box>
    
      
          <Box sx={{
            flexDirection: 'column',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'background.default',
            color: 'text.primary',
            display: globalContext.navigation === "5"? 'flex': "none",
          }} >
            
            {props.panel5}
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
              value="1"
              icon={<MenuIcon fontSize='large' /> }
            />
        <BottomNavigationAction
              variant="main"
              label={props.panel2Label}
              value="2"
              icon={props.panel2icon}
            />
    
            <BottomNavigationAction
              variant="main"
              label={props.panel3Label}
              value="3"
              icon={props.panel3icon}
            />
    
            <BottomNavigationAction
              variant="main"
              label={props.panel4Label}
              value="4"
              icon={props.panel4icon}
            />
    
            <BottomNavigationAction
              variant="main"
              label={props.panel5Label}
              value="5"
              icon={props.panel5icon}
            />
      </BottomNavigation>
    </Paper>
    </>)
}