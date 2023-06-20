import { Box, Button, Slide, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const SnakbarEx = () => {

  const [open, setOpen] = useState(false)
  
  const handleClick = () =>{
    setOpen(true)
  }

  const handleClose = (event, reason) => {
    if(reason === 'clickaway')
      return;
    setOpen(false)
  }

  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI  Snakbar Example </Typography>

      <Box mt={'3rem'}>
        {/* <Button variant='contained' color='secondary' onClick={handleClick}>
          Show Snackbar
        </Button> */}
        
        <Button variant='contained' color='secondary' onClick={handleClick}>
          Show Snackbar
        </Button>

      </Box>
      <Snackbar
        open={open}
        message='This is Material UI Snackbar.'
        TransitionComponent={(props)=><Slide {...props} direction="left"/>}
        autoHideDuration={2000}
        onClose={handleClose}
        anchorOrigin={
          {
            vertical:'bottom',
            horizontal:'center'
          }
        }
      />
    </Box>
  )
}

export default SnakbarEx