import { Avatar, Box, Stack, Typography } from '@mui/material'
import { deepOrange, deepPurple, red } from '@mui/material/colors'
import React from 'react'

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

    </Box>

  )
}

export default AvatarEx