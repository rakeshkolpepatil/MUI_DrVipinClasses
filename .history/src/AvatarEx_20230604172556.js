import { Avatar, AvatarGroup, Box, Stack, Typography } from '@mui/material'
import { deepOrange, deepPurple, red } from '@mui/material/colors'
import React from 'react'
import Person2TwoToneIcon from '@mui/icons-material/Person2TwoTone';
import Rakesh_Image from "./image/Rakesh_Image.jpeg"

const AvatarEx = () => {
  return (
    <Box margin={2}>
      <Typography variant='h5' color={'secondary'} align='center'>
        MUI Avatar Example
      </Typography>

      <Stack direction={'row'} spacing={2} mt={'2rem'} >
        <Avatar sx={{ width:50, height:50, bgcolor: deepOrange[400] }}> RP </Avatar>
        <Avatar sx={{ width:60, height:60, bgcolor: deepPurple[400] }}> SP </Avatar>
        <Avatar sx={{ width:70, height:70, bgcolor: red[300] }}> ZP </Avatar>
      </Stack>

      <Stack direction={'row'} spacing={2} mt={'2rem'} >
        <Avatar sx={{ width:50, height:50, bgcolor: deepOrange[400] }} children='RP'/> 
        <Avatar sx={{ width:60, height:60, bgcolor: deepPurple[400] }} children='SP'/> 
        <Avatar sx={{ width:70, height:70, bgcolor: red[300] }} children='ZP'/>
      </Stack>

      <Stack direction={'row'} spacing={2} mt={'2rem'} >
        <Avatar sx={{ width:50, height:50, bgcolor: deepOrange[400] }}> 
          <Person2TwoToneIcon /> 
        </Avatar>
        <Avatar sx={{ width:60, height:60, bgcolor: deepPurple[400] }}> 
          <Person2TwoToneIcon  sx={{ width: 40, height: 40 }}/> 
        </Avatar>
        <Avatar sx={{ width:70, height:70, bgcolor: red[300] }}> 
          <Person2TwoToneIcon fontSize='large' sx={{ width: 50, height: 50 }}/> 
        </Avatar>
      </Stack>

      <Stack direction={'row'} spacing={2} mt={'2rem'} >
        <Avatar variant='rounded' sx={{ width:150, height:150, bgcolor: deepOrange[400] }} src={Rakesh_Image} alt="Rakesh"> </Avatar> 
      </Stack>

      {/* <Stack direction={'row'} spacing={2} mt={'2rem'} > */}
        <AvatarGroup 
          spacing={1} 
          max={5}
          total={10}
          appearence='grid'
          borderColor="#FF6347" 
        >
          <Avatar sx={{ width:50, height:50, bgcolor: deepOrange[400] }}> 
            <Person2TwoToneIcon /> 
          </Avatar>
          <Avatar sx={{ width:60, height:60, bgcolor: deepPurple[400] }}> 
            <Person2TwoToneIcon  sx={{ width: 40, height: 40 }}/> 
          </Avatar>
          <Avatar sx={{ width:70, height:70, bgcolor: red[300] }}> 
            <Person2TwoToneIcon fontSize='large' sx={{ width: 50, height: 50 }}/> 
          </Avatar>
          <Avatar sx={{ width:70, height:70, bgcolor: red[300] }}> 
            <Person2TwoToneIcon fontSize='large' sx={{ width: 50, height: 50 }}/> 
          </Avatar>
        </AvatarGroup>
      {/* </Stack> */}

    </Box>

  )
}

export default AvatarEx