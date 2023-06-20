import { Box, FormControlLabel, Switch, Typography } from '@mui/material'
import React, { useState } from 'react'

const SwitchEx = () => {

  const [onOff, setOnOff] = useState(false)
  const [myColor, setMyColor] = useState('')

  const handleSwitch = (e) =>{
    setOnOff(e.target.checked)
    getMyColor()
  }

  const getMyColor = () =>{
    if(!onOff)
      setMyColor("#ff0000")
    else 
      setMyColor("#ffff")
  }

  return (
    <Box 
      bgcolor={myColor}
      display='flex'
      width={'100%'}
      height={'100%'}
      flexDirection={'column'}
      margin={'1rem'}
      justifyContent='flex-start'
    >
      <Typography variant='h5'> Material Ui Switch Example </Typography>
      <Box
        display='flex-box'
        justifyContent='flex-start'
      >
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