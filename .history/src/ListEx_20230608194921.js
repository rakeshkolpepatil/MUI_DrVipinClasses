import { Box, List, ListItem, ListItemText, Typography } from '@mui/material'
import React from 'react'

const ListEx = () => {

  const PrimaryList = ["Primary List 1", "Primary List 2", "Primary List 3", "Primary List 4"]
  const SecondaryList = ["Secondary List 1", "Secondary List 2", "Secondary List 3", "Secondary List 5"]
  
  return (
    <Box m={2}>
      <Typography variant='h4'>MUI List Example</Typography> 
      <Box 
        marginLeft='3rem'

      >
        <List>
          {
            PrimaryList.map( (itr, index)=>(
              <ListItem key={index}>
                <ListItemText primary={itr} secondary={SecondaryList[index]}/>
              </ListItem>
            ))
          }
      </List>
      </Box> 
    </Box>
  )
}

export default ListEx