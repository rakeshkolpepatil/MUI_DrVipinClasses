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
    </div>
  )
}

export default ButtonEx