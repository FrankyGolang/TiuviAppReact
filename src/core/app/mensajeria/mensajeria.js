'use-strict'

import  MultiPanel  from '../multipanel.js'
import { H1 } from '../../typography.js'

//iconos
//contactos
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
//grupos
import GroupIcon from '@mui/icons-material/Group';
//chats
import ChatIcon from '@mui/icons-material/Chat';
//chat azar
import DuoIcon from '@mui/icons-material/Duo';

export default function MensajeriaPanel(props){

    return(
        <MultiPanel 
        panel2={ <H1 >Tus contactos</H1>}
        panel2Label="Contactos"
        panel2icon={<ContactPhoneIcon fontSize='large' />}

        panel3={<H1 >Grupos de chat</H1>}
        panel3Label="Grupos"
        panel3icon={<GroupIcon fontSize='large' />}

   
        panel4={<H1 >Salas de chat</H1>}
        panel4Label="Chat"
        panel4icon={<ChatIcon fontSize='large' />}


        panel5={<H1 >Chat Global</H1>}
        panel5Label="Global"
        panel5icon={<DuoIcon fontSize='large' />}


        />
    )
}