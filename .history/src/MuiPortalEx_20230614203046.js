import { Box, Typography, Button, Portal } from '@mui/material'
import React, { useState } from 'react'

const MuiPortalEx = () => {
  const [show, setShow] = useState()

  const handleClick = () =>{
    setShow(!show)
  }

  return (
    <Box>
      <Typography variant="h4" > MUI Portal Example </Typography>
      <Button variant="contained" color="secondary" onClick={handleClick}>
        Show Portal
      </Button>
      {show? <Portal> This is MUI Portal </Portal>: null}
    </Box>
  )
}

export default MuiPortalEx