import React from 'react'
import Box from '@mui/material/Box'



export default function EventInfo() {
    
    return (
        <div>
            <Box flex align-items="center" >
                <Box width="100%" paddingTop="2%" paddingBottom="4%" backgroundColor="yellow" >
                    <h1> Reserved Items </h1>
                    <p> Below are all guests that RSVP'd to your event, along with the items they are bringing</p>
                </Box>
            </Box>
        </div>
    )
}