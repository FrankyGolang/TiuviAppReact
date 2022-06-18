'use-strict'

import  MultiPanel  from '../multipanel.js'
import { H1 } from '../../typography.js'

//PanelList
import { useGlobalContext} from '../../options.js'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

//icons
import CollectionsTwoToneIcon from '@mui/icons-material/CollectionsTwoTone';
import ImageTwoToneIcon from '@mui/icons-material/ImageTwoTone';
import CloudDoneTwoToneIcon from '@mui/icons-material/CloudDoneTwoTone';

import Button from '@mui/material/Button';

function Title2(){

    const globalContext = useGlobalContext();
    
    return (
    <> 
        <H1 > Listas de Imagenes</H1>
        <Button onClick={(event) => globalContext.selectNavigation(event, 'otroPanel')} 
        variant="text">Otro panel</Button>
     </>)
}

function Title3(){

    return (<H1 >Listas de Imagenes</H1>)
}

function Title4(){

    return (<H1 >Imagenes Offline</H1>)
}

function OtroPanel(){

  
    return(
        <H1 >Soy otro panel</H1>
    )
  }

function ImagenPanel(props){


    return(
        <MultiPanel 
        panels={{
            panel2: Title2,
            panel3: Title3,
            panel4: Title4,
            otroPanel:OtroPanel,
        }}

        panel2Label="Listas"
        panel2icon={<CollectionsTwoToneIcon fontSize='large' />}

   
        panel3Label="Imagenes"
        panel3icon={<ImageTwoToneIcon fontSize='large' />}

   
        panel4Label="offline"
        panel4icon={<CloudDoneTwoToneIcon fontSize='large' />}

        />
    )
}

function ImagenPanelList(){
    
    const globalContext = useGlobalContext();
    
    return(<ListItemButton
        selected={globalContext.menu === 'imagen'}
        onClick={(event) => globalContext.selectMenu(event, 'imagen')}
        >
        <ListItemIcon>
          <ImageTwoToneIcon fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="Imagenes" />
        </ListItemButton>)
}

function ImagenPanelSelect(props){
    
    const globalContext = useGlobalContext();
    
    return(<ListItemButton
        onClick={props.onClick}
        >
        <ListItemIcon>
          <ImageTwoToneIcon fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="Imagenes" />
        </ListItemButton>)
}

export const panelImage = {
    name: 'imagen',
    panel: ImagenPanel,
    panelList: ImagenPanelList,
    panelSelect: ImagenPanelSelect,
};
