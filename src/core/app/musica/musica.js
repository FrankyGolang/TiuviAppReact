'use-strict'

import  MultiPanel  from '../multipanel.js'
import { H1 } from '../../typography.js'

//PanelList
import { useGlobalContext} from '../../options.js'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

//icons
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import MusicVideoTwoToneIcon from '@mui/icons-material/MusicVideoTwoTone';
import CloudDoneTwoToneIcon from '@mui/icons-material/CloudDoneTwoTone';

function Title2(){

    return (<H1 >Listas de musica</H1>)
}

function Title3(){

    return (<H1 >Canciones</H1>)
}

function Title4(){

    return (<H1 >Musica Offline</H1>)
}




function MusicaPanel(props){


    return(
        <MultiPanel

        panels={{
            panel2: Title2,
            panel3: Title3,
            panel4: Title4,
        }}

        panel2={ <H1 >Listas de musica</H1>}
        panel2Label="Listas"
        panel2icon={<QueueMusicIcon fontSize='large' />}

        panel3={<H1 >Canciones</H1>}
        panel3Label="Canciones"
        panel3icon={<MusicVideoTwoToneIcon fontSize='large' />}

   
        panel4={<H1 >Musica Offline</H1>}
        panel4Label="offline"
        panel4icon={<CloudDoneTwoToneIcon fontSize='large' />}

        />
    )
}

function MusicaPanelList(){
    
    const globalContext = useGlobalContext();
    
    return(<ListItemButton
        selected={globalContext.menu === 'musica'}
        onClick={(event) => globalContext.selectMenu(event, 'musica')}
        >
        <ListItemIcon>
          <MusicVideoTwoToneIcon fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="Musica" />
        </ListItemButton>)
}

function MusicaPanelSelect(props){
    
    const globalContext = useGlobalContext();
    
    return(<ListItemButton
        onClick={props.onClick}
        >
        <ListItemIcon>
          <MusicVideoTwoToneIcon fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="Musica" />
        </ListItemButton>)
}

const panelMusica  = {
    name: 'musica',
    panel: MusicaPanel,
    panelList: MusicaPanelList,
    panelSelect: MusicaPanelSelect,
};
export default panelMusica;