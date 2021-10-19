import React from "react";
import axios from "axios";
import {Link, Route, Switch} from 'react-router-dom'
import Box from '@mui/material/Box';
import Header from "./Header"
import Button from '@mui/material/Button'

export default function Dashboard() {

    return (
        <div>
            <Header />
            <Box flex align-items="center" >
                <Box width="100%" paddingTop="2%" paddingBottom="4%" border="1px solid red" backgroundColor="yellow" >
                    <h1> Dashboard </h1>
                    <p> Potluck Planner filler text I guess yadda yadda </p>
                </Box>
            </Box>
            <Box width="100%" flex sx={{ alignItems: 'center'}} >
                <Box>
                    <Button variant="contained" sx={{ width:"40%", mr:"20%", ml:"20%", mt:"5%", pt:"2%", pb:"2%"}}>
                        <h2> Create New Event </h2>
                    </Button> 
                    <Button variant="contained" sx={{ width:"40%", mr:"20%", ml:"20%", mt:"5%", pt:"2%", pb:"2%" }}>
                        <h2>Edit Event </h2>
                    </Button>
                </Box>
            </Box>
        </div>
    )
}