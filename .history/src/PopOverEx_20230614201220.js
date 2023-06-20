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

      {/* In Pop-Over component screen freezes when popover is rendered over the screen. It waits for the response. */}
      <Button 
        variant="contained" 
        color="secondary"
        onClick={handleClick} 
        sx={{mt:'2rem', mx:'1rem'}}
      >
        Show Popper
      </Button>

      <Popover 
        open={Boolean(anchorObj)}
        onClose={handleClose}
        anchorEl={anchorObj}
        anchorOrigin={{
            vertical:"bottom",
            horizontal:'right'
        }}
        transformOrigin={{
          vertical:"bottom",
          horizontal:'top'
        }}

      >
        <Typography variant="body2" color="secondary" p={2}> This is PopOver Component. </Typography>
      </Popover>
    </Box>
  )
}

export default PopOverEx