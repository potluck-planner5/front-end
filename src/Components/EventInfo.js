import React from 'react'
import Box from '@mui/material/Box'
import userEvent from '@testing-library/user-event'


const mockGuestList = [{name: "Bob", food: ["Milk", "Eggs", "Cheese"]}, {name: "Sally", food: ["Salad", "Chips", "Salsa"]},{name: "George", food: ["Dessert", "Dip", "Drinks"]}]
export default function EventInfo() {
    
    return (
        <div>
            <Box flex align-items="center" >
                <Box width="100%" paddingTop="2%" paddingBottom="4%" backgroundColor="yellow" >
                    <h1> Reserved Items </h1>
                    <p> Below are all guests that RSVP'd to your event, along with the items they are bringing</p>
                </Box>
            </Box>
          
            <Box backgroundColor="red">
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}  width="70%" pr="5%" pt="2%" ml="15%" backgroundColor="white">
                    <Box
                        sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width:"25%",
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        }}
                    >
                        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Name</Box>
                        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 1</Box>
                        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 2</Box>
                        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 3</Box>
                    </Box>
                    <Box
                        sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width:"25%",
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        }}
                    >
                        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Name</Box>
                        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 1</Box>
                        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 2</Box>
                        <Box sx={{ p: 1, bgcolor: 'grey.300' }}>Item 3</Box>
                    </Box>
                    
                </Box>
            </Box>
        </div>
    )
}