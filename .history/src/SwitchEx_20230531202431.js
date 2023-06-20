import { Box, FormControlLabel, Switch, Typography } from '@mui/material'
import React from 'react'

const SwitchEx = () => {

  const [onOff, setOnOff]

  return (
    <Box>
      <Typography variant='h5'> Material Ui Switch Example </Typography>
      <Box>
        <FormControlLabel
          label="Change to Red background color."
          control={<Switch checked={onOff} onChange={handleSwitch}/>}
        />
      </Box>
    </Box>
  )
}

export default SwitchEx