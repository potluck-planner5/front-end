import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { typography } from '@mui/system';


function Header() {


    return(
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h2" component="div" sx={{flexGrow: 1}}>
                            Potluck Planner
                        </Typography>
                        <Button color="inherit">Sign In</Button>
                        <Button color="inherit">Register</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                <Toolbar>
                    <Typography variant="h2" component="div" sx={{flexGrow: 1}}>
                        Potluck Planner
                    </Typography>
                    <Button color="inherit">Sign In</Button>
                    <Button color="inherit">Register</Button>
                </Toolbar>
                </AppBar>
            </Box>
        </div>
     ) 
}

export default Header