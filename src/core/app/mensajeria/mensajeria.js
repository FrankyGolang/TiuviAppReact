'use-strict'

import  MultiPanel  from '../multipanel.js'
import { H1 } from '../../typography.js'

//PanelList
import { useGlobalContext} from '../../options.js'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

//iconos
//contactos
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
//grupos
import GroupIcon from '@mui/icons-material/Group';
//chats
import ChatIcon from '@mui/icons-material/Chat';
//chat azar
import DuoIcon from '@mui/icons-material/Duo';
//Icono de la lista
import EmailIcon from '@mui/icons-material/Email';



function Title2(){

    return (<H1 >Tus contactos</H1>)
}

function Title3(){

    return (<H1 >Grupos de chat</H1>)
}

function Title4(){

    return (<H1 >Salas de chat</H1>)
}

function Title5(){

    return (<H1 >Chat global</H1>)
}


function MensajeriaPanel(props){


    return(
        <MultiPanel 
        panels={{
            panel2: Title2,
            panel3: Title3,
            panel4: Title4,
            panel5: Title5,
        }}


        panel2Label="Contactos"
        panel2icon={<ContactPhoneIcon fontSize='large' />}

        panel3Label="Grupos"
        panel3icon={<GroupIcon fontSize='large' />}

   
        panel4Label="Chat"
        panel4icon={<ChatIcon fontSize='large' />}


        panel5Label="Global"
        panel5icon={<DuoIcon fontSize='large' />}


        />
    )
}

function MensajeriaPanelList(){
    
    const globalContext = useGlobalContext();
    
    return(<ListItemButton
        selected={globalContext.menu === 'mensajeria'}
        onClick={(event) => globalContext.selectMenu(event, 'mensajeria')}
        >
        <ListItemIcon>
          <EmailIcon fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="Mensajeria" />
        </ListItemButton>)
}

function MensajeriaPanelSelect(props){
    
    const globalContext = useGlobalContext();
    
    return(<ListItemButton
        onClick={props.onClick}
        >
        <ListItemIcon>
          <EmailIcon fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="Mensajeria" />
        </ListItemButton>)
}

const panelMensajeria = {
    name: 'mensajeria',
    panel: MensajeriaPanel,
    panelList: MensajeriaPanelList,
    panelSelect: MensajeriaPanelSelect,
};
export default panelMensajeria;