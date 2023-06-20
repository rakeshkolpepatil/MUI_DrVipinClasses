import { Avatar, Box, Stack, Typography } from '@mui/material'
import { deepOrange, deepPurple } from '@mui/material/colors'
import React from 'react'

const AvatarEx = () => {
  return (
    <Box margin={2}>
      <Typography variant='h5' color={'secondary'} align='center'>
        MUI Avatar Example
      </Typography>

      <Stack direction={'row'} spacing={2} mt={'2rem'} >
        <Avatar sx={{ bgcolor: deepOrange[500] }} > RP </Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }} > SP </Avatar>
        <Avatar sx={{ bgcolor: deep }} > ZP </Avatar>
      </Stack>

    </Box>

  )
}

export default AvatarEx