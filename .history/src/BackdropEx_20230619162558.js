import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Backdrop, Box, Button, TextField } from '@mui/material'

const BackdropEx = () => {
  const [open, setOpen] = useState()
  const [name, setName] = useState()
  const handleClick = () => 
  return (
    <Box>
      <Typography variant="h3" color="secondary">MUI Backdrop Example </Typography>    
      <Button variant='contained' onClick={handleClick} color='secondary'>  </Button>
      <Backdrop>
        <TextField
          variant='filled'
          value={name}
          onChange={(event)=> setName(event.target.value)}
        />
      </Backdrop>
    </Box>
  )
}

export default BackdropEx