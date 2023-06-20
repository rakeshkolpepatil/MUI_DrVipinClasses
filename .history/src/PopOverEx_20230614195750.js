import { Box, Typography, Button, Popover } from '@mui/material'
import React, { useState } from 'react'

const PopOverEx = () => {

  const [anchorObj, setAnchorObj] = useState(null)
  const handleClick = (e) => {
    setAnchorObj(e.currentTarget)
  }
  const handleClose = () =>{
    setAnchorObj(null)
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
      <Popover 
        open={bool(anchorObj)}
        onClose={handleClose}
        anchorEl={anchorObj}
      >
        <Typography variant="body2" color="secondary" p={2}> This is PopOver Component. </Typography>
      </Popover>
    </Box>
  )
}

export default PopOverEx