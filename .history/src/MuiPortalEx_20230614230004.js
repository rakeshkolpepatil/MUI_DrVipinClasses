import { Box, Typography, Button, Portal } from '@mui/material'
import React, { useRef, useState } from 'react'

const MuiPortalEx = () => {
  const [show, setShow] = useState()
  const refVar = useRef(null)
  const handleClick = () =>{
    setShow(!show)
  }

  return (
    <Box>
      <Typography variant="h4" > MUI Portal Example </Typography>
      <Button variant="contained" color="secondary" onClick={handleClick} size='normal' sx={{ mt:'2rem'}}>
        Show Portal
      </Button>
      {show ? <Portal container={refVar.current}> This is MUI Portal </Portal>: null}
      <Box
        ref={refVar}
        sx={{ border:'3px solid #ff0000', width:200, height:30, mx:'auto', mt:2, textAlign: 'center' }}
      >

      </Box>
    </Box>
  )
}

export default MuiPortalEx