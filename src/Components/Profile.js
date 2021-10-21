import React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box"



export default function Profile() {


    return (
        <Box>
            <Box sx={{display: "flex", }}>
                <Box sx={{ display: "flex"}} width="50%" border="1px solid red">
                    <Box with="40%">
                        <img src="https://thepowerofthedream.org/wp-content/uploads/2015/09/generic-profile-picture-300x300.jpg"></img>
                    </Box>
                    
                    <h3>Profile info</h3>
                </Box>
                <Box width="50%">
                    <h3>THis will have buttons</h3>
                </Box>
            </Box>
            <Box>

            </Box>
        </Box>
    )
}