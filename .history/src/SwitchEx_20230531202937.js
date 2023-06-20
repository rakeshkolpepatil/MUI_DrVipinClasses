import { Box, FormControlLabel, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'

const SwitchEx = () => {

  const [onOff, setOnOff] = useState(false)
  const [myColor, setMyColor] = useState('')

  const handleSwitch = (e) =>{
    setOnOff(e.target.checked)
  }

  const getMyColor = () =>{
    if(onOff)
      setMyColor("#ff0000")
    else 
      setMyColor("#ffff")
  }

  return (
    <Box 
      bgcolor={getMyColor}
      
    >
      <Typography variant='h5'> Material Ui Switch Example </Typography>
      <Box>
        <FormControlLabel
          label="Change to Red background color."
          value = {onOff}
          control={<Switch checked={onOff} onChange={handleSwitch}/>}
        />
      </Box>
    </Box>
  )
}

export default SwitchEx