import { Box, Button, Snackbar, Typography } from '@mui/material'
import React, { useState } from 'react'

const SnakbarEx = () => {

  const [open, setOpen] = useState(false)

  const handleClick = () =>{

  }

  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI  Snakbar Example </Typography>

      <Box mt={'3rem'}>
        <Button variant='contained' color='secondary' onClick={handleClick}>
          Show Snackbar
        </Button>
      </Box>
      <Snackbar/>
    </Box>
  )
}

export default SnakbarEx