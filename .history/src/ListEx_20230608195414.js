import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemIcon, ListItemText, Typography } from '@mui/material'
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import React from 'react'
import Rakesh_Image from './image/Rakesh_Image.jpeg'

const ListEx = () => {

  const PrimaryList = ["Primary List 1", "Primary List 2", "Primary List 3", "Primary List 4"]
  const SecondaryList = ["Secondary List 1", "Secondary List 2", "Secondary List 3", "Secondary List 5"]
  
  return (
    <Box m={2}>
      <Typography variant='h4'>MUI List Example</Typography> 
      <Box 
        marginLeft='8rem'

      >
        <List>
          {
            PrimaryList.map( (itr, index)=>(
              <ListItem key={index}>
                <ListItemAvatar 
                  children={ <Avatar src={Rakesh_Image}/> } margin={2} />
                <ListItemAvatar children={<EmailTwoToneIcon/>}/>
                <ListItemIcon children={<EmailTwoToneIcon/>}/> 
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