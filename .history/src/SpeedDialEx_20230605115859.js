import { Box, SpeedDial, SpeedDialAction } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

const SpeedDialEx = () => {
  return (
    <Box>
      <SpeedDial icon={<AddCircleIcon/>}>
        <SpeedDialAction>

        </SpeedDialAction>
      </SpeedDial>
    </Box>
  )
}

export default SpeedDialEx