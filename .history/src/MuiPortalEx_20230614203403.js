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
      <Button variant="contained" color="secondary" onClick={handleClick} size='normal' sx={{ mt:'2rem'}}>
        Show Portal
      </Button>
      {show ? <Portal> This is MUI Portal </Portal>: null}
      <Box
        sx={{ border:'3px solid #ff0000', width:200, height:20, mx:65, mt:2 }}
      >

      </Box>
    </Box>
  )
}

export default MuiPortalEx