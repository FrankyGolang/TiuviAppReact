'use-strict'

import  MultiPanel  from '../multipanel.js'

import { H1 } from '../../typography.js'

//Info
import InfoIcon from '@mui/icons-material/Info';

//Home
import HomeIcon from '@mui/icons-material/Home';
//Preguntas frecuentes
import HelpIcon from '@mui/icons-material/Help';
//contactpage
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function MainPanel(props){

    return(
        <MultiPanel 
        panel2={ <H1 >Productos o servicios</H1>}
        panel2Label="Información"
        panel2icon={<InfoIcon fontSize='large' />}

        panel3={<H1 >FrontPage</H1>}
        panel3Label="FrontPage"
        panel3icon={<HomeIcon fontSize='large' />}

   
        panel4={<H1 >Preguntas frecuentes</H1>}
        panel4Label="Preguntas"
        panel4icon={<HelpIcon fontSize='large' />}


        panel5={<H1 >Contacto</H1>}
        panel5Label="contacto"
        panel5icon={<ContactPageIcon fontSize='large' />}


        />
    )
}