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

      <Backdrop
        open={open}
      >
        <Box
          width={400}
          height={130}
          border={2}
          borderRadius={3}
          sx={{ backgroundColor: 'white' }}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
        >
            <TextField
              sx={{ border: '3px solid black', borderRadius: 3, mx: 4 }}
              variant='outlined'
              value={name}
              onChange={(event)=> setName(event.target.value)}
              // sx={{ mx: 4 }}
            />
            <Button variant='contained' onClick={handleClose} color='secondary'> Close </Button>
        </Box>
      </Backdrop>
    </Box>
  )
}

export default BackdropEx