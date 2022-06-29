'use-strict'

import  MultiPanel  from '../multipanel.js'
import { H1 } from '../../typography.js'

//PanelList
import { useGlobalContext} from '../../options.js'
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

//icons
import VideoLibraryTwoToneIcon from '@mui/icons-material/VideoLibraryTwoTone';
import OndemandVideoTwoToneIcon from '@mui/icons-material/OndemandVideoTwoTone';
import CloudDoneTwoToneIcon from '@mui/icons-material/CloudDoneTwoTone';


function Title2(){

    return (<H1 >Listas de video</H1>)
}

function Title3(){

    return (<H1 >Videos</H1>)
}

function Title4(){

    return (<H1 >Video Offline</H1>)
}


export  function VideoPanel(props){


    return(
        <MultiPanel

        panels={{
            panel2: Title2,
            panel3: Title3,
            panel4: Title4,
        }}

        panel2Label="Listas"
        panel2icon={<VideoLibraryTwoToneIcon fontSize='large' />}

        panel3Label="Videos"
        panel3icon={<OndemandVideoTwoToneIcon fontSize='large' />}

        panel4Label="offline"
        panel4icon={<CloudDoneTwoToneIcon fontSize='large' />}

        />
    )
}

export function VideoPanelList(){
    
    const globalContext = useGlobalContext();
    
    return(<ListItemButton
        selected={globalContext.menu === 'video'}
        onClick={(event) => globalContext.selectMenu(event, 'video')}
        >
        <ListItemIcon>
          <OndemandVideoTwoToneIcon fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="Video" />
        </ListItemButton>)
}

function VideoPanelSelect(props){
    
    const globalContext = useGlobalContext();
    
    return(<ListItemButton
        onClick={props.onClick}
        >
        <ListItemIcon>
          <OndemandVideoTwoToneIcon fontSize='large'/>
        </ListItemIcon>
        <ListItemText primary="Video" />
        </ListItemButton>)
}

const panelVideo = {
    name: 'video',
    panel: VideoPanel,
    panelList: VideoPanelList,
    panelSelect: VideoPanelSelect,
};
export default panelVideo;