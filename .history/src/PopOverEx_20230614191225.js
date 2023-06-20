import { Box, Typography, Button, Popover } from '@mui/material'
import React, { useState } from 'react'

const PopOverEx = () => {

  const [show, setShow] = useState(false)
  const handleClick = () => {
    setShow(true)
  }

  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI PopOver Example </Typography>
      <Button 
        sx={{mt:'2rem'}}
        variant="contained" 
        color="secondary"
        onClick={handleClick} 
      >
        Show PopOver
      </Button>
      <Popover >
        <Typography variant="body2" color="initial"></Typography>
        This is PopOver Component.
      </Popover>
    </Box>
  )
}

export default PopOverEx