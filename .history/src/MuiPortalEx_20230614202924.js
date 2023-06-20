import { Box, Typography, Button } from '@mui/material'
import React from 'react'

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
    </Box>
  )
}

export default MuiPortalEx