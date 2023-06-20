import { Button, Stack } from '@mui/material'
import React from 'react'

const ButtonEx = () => {
  return (
    <div>
      <Stack display='flex' flexDirection='row' justifyContent='center'>
        <Button variant='text' size='small' color='info'> Submit </Button>  
        <Button variant='text' size='small' color='primary'> Submit </Button>  
        <Button variant='text' size='small' color='error'> Submit </Button>  
        <Button variant='text' size='small' color='success'> Submit </Button>  
      </Stack>
      <br/>

      <Stack display='flex' flexDirection='row' justifyContent='center'>
        <Button variant='outlined' size='medium' color='info'> Submit </Button>  
        <Button variant='outlined' size='medium' color='primary'> Submit </Button>  
        <Button variant='outlined' size='medium' color='error'> Submit </Button>  
        <Button variant='outlined' size='medium' color='success'> Submit </Button>  
      </Stack>
      <br/>

      <Stack display='flex' flexDirection='row' justifyContent='center'>
        <Button variant='contained' size='large' color='info'> Submit </Button>  
        <Button variant='contained' size='large' color='primary'> Submit </Button>  
        <Button variant='contained' size='large' color='error'> Submit </Button>  
        <Button variant='contained' size='large' color='success'> Submit </Button>  
      </Stack>
      <br/>
    </div>
  )
}

export default ButtonEx