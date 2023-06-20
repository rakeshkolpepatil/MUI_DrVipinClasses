import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const TextFieldEx = () => {
  return (
    <Box mx={3}>
      <Typography variant='h5' mb={'2rem'}>
        Material UI Text Field Example
      </Typography>
      <Stack spacing={2} direction={'row'}>
        <TextField label='Enter Name' placeholder='Enter your first name' variant='outlined' size='small' mx={3}> </TextField>
        <TextField label='Enter Name' placeholder='Enter your first name' variant='outlined' size='small' mx={3}> </TextField>
      </Stack>
    </Box>
  )
}

export default TextFieldEx