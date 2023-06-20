import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Backdrop, Box, Button, TextField } from '@mui/material'

const BackdropEx = () => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState()
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <Box>
      <Typography variant="h3" color="secondary">MUI Backdrop Example </Typography>    
      <Button sx={{ mt:3 }} size='large' variant='contained' onClick={handleClick} color='secondary'> Open Backdrop </Button>

      <Box>
        <Backdrop
          open={open}
          sx={{ backgroundColor: 'white' }}
        >
          <TextField
            variant='filled'
            value={name}
            onChange={(event)=> setName(event.target.value)}
            sx={{ mx: 4}}
          />
          <Button variant='contained' onClick={handleClose} color='secondary'> Close </Button>
        </Backdrop>
      </Box>

    </Box>
  )
}

export default BackdropEx