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
    setAnchorPopperObj( anchorPopperObj ? null: e.currentTarget)
  }
  const handlePopperClose = () =>{
    setAnchorPopperObj(null)
  }

  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI PopOver Example </Typography>

      {/* In Pop-Over component screen freezes when popover is rendered over the screen. It waits for the response. */}
      <Button 
        sx={{mt:'2rem'}}
        variant="contained" 
        color="secondary"
        onClick={handleClick} 
      >
        Show PopOver
      </Button>

      <Popover 
        open={Boolean(anchorObj)}
        onClose={handleClose}
        anchorEl={anchorObj}
        anchorOrigin={{
          vertical:"bottom",
          horizontal:'left'
        }}
        transformOrigin={{
          vertical:"left",
          horizontal:'start'
        }}
        >
        <Typography variant="body2" color="secondary" p={2}> This is PopOver Component Info. </Typography>
      </Popover>


      {/* In Popper component screen will not freezes when popper is rendered over the screen. It waits for the response. */}
      <Button 
        variant="contained" 
        color="secondary"
        onClick={handlePopperClick} 
        sx={{mt:'2rem', mx:'3rem'}}
      >
        Show Popper
      </Button>
        
      <Popper 
        open={Boolean(anchorPopperObj)}
        // onClose={handlePopperClose}
        anchorEl={anchorPopperObj}
        placement='bottom-start'
      >
        <Typography variant="body2" color="secondary" p={2}> This is PopOver Component. </Typography>
      </Popper>

    </Box>
  )
}

export default PopOverEx