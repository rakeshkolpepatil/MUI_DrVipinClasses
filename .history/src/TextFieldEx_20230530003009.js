import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const TextFieldEx = () => {
  return (
    <Box mx={3}>
      <Typography variant='h5' mb={'2rem'}>
        Material UI Text Field Example
      </Typography>
      <Stack spacing={2} direction={'row'} mb={'1rem'}>
        <TextField label='Enter Name' placeholder='Enter first name' variant='outlined' size='small' mx={3}> </TextField>
        <TextField label='Enter Name' placeholder='Enter first name' variant='filled' size='normal' mx={3}> </TextField>
        <TextField label='Enter Name' placeholder='Enter your first name' variant='standard' size='small' mx={3}> </TextField>
      </Stack>

      <Stack spacing={2} direction={'row'} padding={'1rem'}>
        <TextField label='Enter Name' placeholder='Enter first name' variant='outlined' size='small' mx={3}> </TextField>
        <TextField label='Enter Name' placeholder='Enter your first name' variant='filled' color='secondary' size='normal' mx={3}> </TextField>
        <TextField label='Enter Name' placeholder='Enter first name' variant='standard' size='small' mx={3}> </TextField>
      </Stack>

      <Stack spacing={2} direction={'row'} padding={'1rem'}>
        <TextField label='Enter Name' placeholder='Enter first name' variant='outlined' size='small' mx={3}> </TextField>
        <TextField label='Enter Name' placeholder='Enter your first name' variant='filled' color='secondary' size='normal' mx={3}> </TextField>
        <TextField label='Enter Name' placeholder='Enter first name' variant='standard' size='small' mx={3}> </TextField>
      </Stack>

    </Box>
  )
}

export default TextFieldEx