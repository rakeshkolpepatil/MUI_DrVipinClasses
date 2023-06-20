import { Box, Typography, Button, Popover, Popper } from '@mui/material'
import React, { useState } from 'react'

const PopOverEx = () => {

  const [anchorObj, setAnchorObj] = useState(null)
  const [anchorPopperObj, setAnchorPopperObj] = useState(null)

  const handleClick = (e) => {
    setAnchorObj(e.currentTarget)
  }
  const handleClose = () =>{
    setAnchorObj(null)
  }
  const handlePopperClick = (e) => {
    setAnchorPopperObj(e.currentTarget)
  }
  const handlePopperClose = () =>{
    setAnchorPopperObj(null)
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
        sx={{mt:'2rem', mx:'3rem'}}
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

        
      <Popper 
        open={Boolean(anchorPopperObj)}
        onClose={handlePopperClose}
        anchorEl={anchorPopperObj}
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
      </Popper>

    </Box>
  )
}

export default PopOverEx