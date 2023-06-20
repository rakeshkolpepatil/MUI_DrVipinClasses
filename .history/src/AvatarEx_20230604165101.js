import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

const AvatarEx = () => {
  return (
    <Box margin={2}>
      <Typography variant='h5' color={'secondary'} align='center'>
        MUI Avatar Example
      </Typography>

      <Stack direction={'row'} spacing={2} mt={'2rem'} >
        <Avatar sizes='small' > RP </Avatar>
        <Avatar sizes='normal'> SP </Avatar>
        <Avatar> ZP </Avatar>
      </Stack>

    </Box>

  )
}

export default AvatarEx