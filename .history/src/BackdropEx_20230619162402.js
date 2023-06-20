import React, { useState } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'

const BackdropEx = () => {
  const [open, setOpen] = useState()
  return (
    <Box>
      <Typography variant="h3" color="secondary">MUI Backdrop Example </Typography>    
      <Button variant='contained' onClick={handleClick} color='secondary'>  </Button>
    </Box>
  )
}

export default BackdropEx