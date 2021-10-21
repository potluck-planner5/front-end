import React from "react";
import axios from "axios";
import {Link, Route, Switch} from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'

// const DashboardButtons(props) {
//     const isOrganizer = props.something;
//     if (isOrganizer) {
//         return 
//             <Link style={{ textDecoration: 'none'}}>
//                 <Button variant="contained" sx={{ width:"40%", mr:"20%", ml:"20%", mt:"5%", pt:"2%", pb:"2%"}}>
//                     <h2> Create New Event </h2>
//                 </Button> 
//             </Link>
//             <Link style={{ textDecoration: 'none'}}>
//                 <Button variant="contained" sx={{ width:"40%", mr:"20%", ml:"20%", mt:"5%", pt:"2%", pb:"2%" }}>
//                     <h2>Edit Event </h2>
//                 </Button>
//             </Link> 
//     }
//     return 
//     <Link style={{ textDecoration: 'none'}}>
//         <Button variant="contained" sx={{ width:"40%", mr:"20%", ml:"20%", mt:"5%", pt:"2%", pb:"2%"}}>
//             <h2> My upcoming events </h2>
//         </Button> 
//     </Link>
// }

export default function Dashboard() {

    return (
        <div>
            
            <Box flex align-items="center" >
                <Box width="100%" paddingTop="2%" paddingBottom="4%" backgroundColor="yellow" >
                    <h1> Dashboard </h1>
                    <p> Below you can create and view events as an organizer, or register what items you will bring as a guest! </p>
                </Box>
            </Box>
            <Box width="100%" flex sx={{ alignItems: 'center'}} >
                <Box>
                    <Link style={{ textDecoration: 'none'}}>
                        <Button variant="contained" sx={{ width:"40%", mr:"20%", ml:"20%", mt:"5%", pt:"2%", pb:"2%"}}>
                            <h2> Create New Event </h2>
                        </Button> 
                    </Link>
                    <Link style={{ textDecoration: 'none'}}>
                        <Button variant="contained" sx={{ width:"40%", mr:"20%", ml:"20%", mt:"5%", pt:"2%", pb:"2%" }}>
                            <h2>View Event </h2>
                        </Button>
                    </Link>    
                </Box>
            </Box>
        </div>
    )
}