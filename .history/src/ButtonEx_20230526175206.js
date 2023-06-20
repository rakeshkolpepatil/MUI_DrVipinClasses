import { Button } from '@mui/material'
import React from 'react'

const ButtonEx = () => {
  return (
    <div>
      <Button variant='text'> Submit </Button>  
      <Button variant='text' color='primary'> Submit </Button>  
      <Button variant='text' color='Error'> Submit </Button>  
    </div>
  )
}

export default ButtonEx