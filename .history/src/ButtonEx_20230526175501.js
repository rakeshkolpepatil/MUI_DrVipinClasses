import { Button } from '@mui/material'
import React from 'react'

const ButtonEx = () => {
  return (
    <div>
      <Button variant='text' size='small' color='info'> Submit </Button>  
      <Button variant='text' size='small' color='primary'> Submit </Button>  
      <Button variant='text' size='small' color='error'> Submit </Button>  
      <Button variant='text' size='small' color='success'> Submit </Button>  
      <br/>

      <Button variant='text' size='large' color='info'> Submit </Button>  
      <Button variant='text' size='large' color='primary'> Submit </Button>  
      <Button variant='text' size='large' color='error'> Submit </Button>  
      <Button variant='text' size='large' color='success'> Submit </Button>  
      <br/>

      <Button variant='text' size='medium' color='info'> Submit </Button>  
      <Button variant='text' size='medium' color='primary'> Submit </Button>  
      <Button variant='text' size='medium' color='error'> Submit </Button>  
      <Button variant='text' size='medium' color='success'> Submit </Button>  
      <br/>
    </div>
  )
}

export default ButtonEx