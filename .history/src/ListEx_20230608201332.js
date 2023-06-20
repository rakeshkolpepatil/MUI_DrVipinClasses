import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Tooltip, Typography } from '@mui/material'
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import React from 'react'
import Rakesh_Image from './image/Rakesh_Image.jpeg'

const ListEx = () => {

  const PrimaryList = ["Primary List 1", "Primary List 2", "Primary List 3", "Primary List 4"]
  const SecondaryList = ["Secondary List 1", "Secondary List 2", "Secondary List 3", "Secondary List 5"]
  
  const handleClick = (index) => {
    alert('You have clicked on' + PrimaryList[index])
  }

  return (
    <Box m={2}>
      <Typography variant='h4'>MUI List Example</Typography> 
      <Box 
        marginLeft='8rem'
        mx={10}
      >
        <List 
          // disablePadding
        >
          {
            PrimaryList.map( (itr, index)=>(
              <>
                <ListItemButton onClick={()=>handleClick(index)}>
                  <ListItem key={index}>

                    <ListItemAvatar 
                      children={ <Avatar src={Rakesh_Image}/> } sx={{margin:'1rem' }}  
                    />

                    <ListItemAvatar children={<EmailTwoToneIcon/>}
                      sx={{margin:'1rem' }}
                    />

                    <ListItemIcon children={<EmailTwoToneIcon/>}/> 
              
                    <Tooltip 
                      title={itr} 
                      // placement='bottom'
                      // placement='bottom'
                      placement='right-start'
                    >
                      <ListItemText primary={itr} secondary={SecondaryList[index]}/>
                    </Tooltip>

                  </ListItem>
                </ListItemButton>
                <Divider/>
              </>
            ))
          }
      </List>
      </Box> 
    </Box>
  )
}

export default ListEx