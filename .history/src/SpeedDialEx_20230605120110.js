import { Box, SpeedDial, SpeedDialAction } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';

const SpeedDialEx = () => {
  return (
    <Box>
      <SpeedDial ariaLabel='speedDial' icon={<AddCircleIcon/>}>
        <SpeedDialAction tooltipTitle='Home'>  </SpeedDialAction>
      </SpeedDial>
    </Box>
  )
}

export default SpeedDialEx