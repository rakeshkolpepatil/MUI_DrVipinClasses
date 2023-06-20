import { Box, Button, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const SnakbarEx = () => {

  const [open, setOpen] = useState(false)

  const handleClick = () =>{
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI  Snakbar Example </Typography>

      <Box mt={'3rem'}>
        <Button variant='contained' color='secondary' onClick={handleClick}>
          Show Snackbar
        </Button>
      </Box>
      <Snackbar
        open={open}
        message='This is Material UI Snackbar.'
        autoHideDuration={1000}
      />
    </Box>
  )
}

export default SnakbarEx