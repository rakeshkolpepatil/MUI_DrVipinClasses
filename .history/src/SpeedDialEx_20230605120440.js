import { Box, SpeedDial, SpeedDialAction } from '@mui/material'
import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';

const SpeedDialEx = () => {
  return (
    <Box>
      <SpeedDial ariaLabel='speedDial' icon={<AddCircleIcon/>}>
        <SpeedDialAction tooltipTitle='Home' icon=<HomeIcon/> >  </SpeedDialAction>
        <SpeedDialAction tooltipTitle='Rating' icon=<StarsTwoToneIcon/> >  </SpeedDialAction>
        <SpeedDialAction tooltipTitle='Accordion' icon=<HomeIcon/> >  </SpeedDialAction>
      </SpeedDial>
    </Box>
  )
}

export default SpeedDialEx