import { Box, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const TextFieldEx = () => {
  const [name, setName] = useState('Rakesh')
  const [pass, setPass] = useState('')
  
  return (
    <Box mx={3}>

      <Typography variant='h5' mb={'2rem'}>
        Material UI Text Field Example
      </Typography>

      <Stack spacing={2} direction={'row'} mb={'1rem'}>
        <TextField value={name} onChange={e=> setName(e.target.value)} label='Enter Name' placeholder='Enter first name' variant='outlined' size='small' mx={3} error> </TextField>
        <TextField label='Enter Name' value='Patil' InputProps={{readOnly:'true'}} placeholder='Enter first name' variant='filled' size='normal' mx={3}> </TextField>
        <TextField label='Enter Name' placeholder='Enter your first name' variant='standard' size='small' mx={3}> </TextField>
      </Stack>

      <Stack spacing={2} direction={'row'} padding={'1rem'}>
        <TextField label='Enter Name' placeholder='Enter first name' variant='outlined' disabled size='small' mx={3}> </TextField>
        <TextField label='Enter Name' placeholder='Enter your first name' variant='filled' color='secondary' size='normal' mx={3}> </TextField>
        <TextField label='Enter Name' placeholder='Enter first name' variant='standard' size='small' mx={3}> </TextField>
      </Stack>

      <Stack spacing={2} direction={'row'} padding={'1rem'}>
        <TextField label='Password' onChange={e=>{setPass(e.target.value)}} required type='password' placeholder='Enter first name' variant='outlined' size='small' mx={3}
        helperText={pass?"Do not share the password":'Please enter password'}
        error={!pass}
        > </TextField>
        <TextField label='date' type='date' placeholder='Enter date' variant='filled' color='secondary' size='large' mx={3}> </TextField>
        <TextField label='time' type='time' placeholder='Enter time' variant='standard' size='normal' mx={3}> </TextField>
      </Stack>

      <Stack spacing={2} direction={'row'} padding={'1rem'}>
        <TextField label='Enter your salary' 
        variant='outlined' 
        size='small'
        mx={3}
        InputProps={{
          startAdornment: (<InputAdornment position='start'> Rs</InputAdornment>)
        }}
        > </TextField>
        <TextField label='date' type='date' placeholder='Enter date' variant='filled' color='secondary' size='large' mx={3}> </TextField>
      </Stack>
    </Box>
  )
}

export default TextFieldEx