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


//PanelList
import { useGlobalContext} from '../../options.js'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';



function Title2(){

    return (<H1 >Productos y servicios</H1>)
}

function Title3(){

    return (<H1 >frontpage</H1>)
}

function Title4(){

    return (<H1 >Preguntas Frecuentes</H1>)
}

function Title5(){

    return (<H1 >Contacto</H1>)
}

function MainPanel(props){


    return(
        <MultiPanel 
        panels={{
            panel2: Title2,
            panel3: Title3,
            panel4: Title4,
            panel5: Title5,
        }}

        panel2Label="Información"
        panel2icon={<InfoIcon fontSize='large' />}

        panel3Label="FrontPage"
        panel3icon={<HomeIcon fontSize='large' />}

        panel4Label="Preguntas"
        panel4icon={<HelpIcon fontSize='large' />}

        panel5Label="contacto"
        panel5icon={<ContactPageIcon fontSize='large' />}
        />
    )
}

function MainPanelList(props){

    const globalContext = useGlobalContext();

    return(
        <ListItemButton
        selected={globalContext.menu === 'main'}
        onClick={(event) => globalContext.selectMenu(event, 'main')}
      >
        <ListItemIcon>
                  <HomeTwoToneIcon fontSize='large' />
          </ListItemIcon>
          <ListItemText primary="Paginas Principales" />
      </ListItemButton>
    )
}

function MainPanelSelect(props){

    const globalContext = useGlobalContext();

    return(
        <ListItemButton
        onClick={props.onClick}
      >
        <ListItemIcon>
                  <HomeTwoToneIcon fontSize='large' />
          </ListItemIcon>
          <ListItemText primary="Paginas Principales" />
      </ListItemButton>
    )
}

const panelMain = {
    name: 'main',
    panel: MainPanel,
    panelList: MainPanelList,
    panelSelect: MainPanelSelect,
};
export default  panelMain 