import React from 'react'
import Box from '@mui/material/Box'
import userEvent from '@testing-library/user-event'


const mockGuestList = [{name: "Bob", food: ["Milk", "Eggs", "Cheese","Napkins"]}, {name: "Sally", food: ["Salad", "Chips", "Salsa","Plates"]},{name: "George", food: ["Dessert", "Dip", "Drinks","Humor"]}]
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
                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', }}  width="70%"   ml="15%" backgroundColor="grey.300">
                    {
                        mockGuestList.map(guest => {
                            return (
                                <Box
                                    sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    width:"30%",
                                    ml: 2.5,
                                    bgcolor: 'background.paper',
                                    }}
                                >
                                    <Box sx={{ p: 1, bgcolor: 'grey.300' }}><h2>{guest.name}</h2></Box>
                                    {
                                        guest.food.map(item => {
                                            return (
                                                <Box sx={{ p: 1, bgcolor: 'grey.300' }}>{item}</Box>
                                            )
                                        })
                                    }  
                                </Box>
                            )
                        })
                    }
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                    
                </Box>
            </Box>
        </div>
    )
}