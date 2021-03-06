'use-strict'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { H2 , P1 } from './typography.js';
import { useGlobalContext } from './options.js';


export function ViewerButton(props){

    const globalContext = useGlobalContext();

    return(<Box
        component="div"
        sx={{ 
            m:'10px',
            textAlign:'center',
        }}
        >
            <H2>
                Acceso Libre
            </H2>
            <P1>
                Accede a tiuvi durante 10 minutos al dia sin registrate.
            </P1>

            <Button 
            onClick={() => globalContext.accessViewer(true)}
            variant="contained" 
            >
                 Accede ahora
            </Button>

        </Box>)
}
