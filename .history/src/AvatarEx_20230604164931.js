import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'

const AvatarEx = () => {
  return (
    <Box margin={2}>
      <Typography variant='h5' color={'secondary'} align='center'>
        MUI Avatar Example
      </Typography>

      <Stack >
        <Avatar> RP </Avatar>
      </Stack>

    </Box>

  )
}

export default AvatarEx