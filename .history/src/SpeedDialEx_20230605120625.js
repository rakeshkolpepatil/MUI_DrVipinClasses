import { Box, SpeedDial, SpeedDialAction } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import AddHomeTwoToneIcon from '@mui/icons-material/AddHomeTwoTone';

const SpeedDialEx = () => {
  return (
    <Box>
      <SpeedDial ariaLabel='speedDial' icon={<AddCircleTwoToneIcon/>}>
        <SpeedDialAction tooltipTitle='Home' icon=<AddHomeTwoToneIcon/> >  </SpeedDialAction>
        <SpeedDialAction tooltipTitle='Rating' icon=<StarsTwoToneIcon/> >  </SpeedDialAction>
        <SpeedDialAction tooltipTitle='Accordion' icon=<HomeIcon/> >  </SpeedDialAction>
      </SpeedDial>
    </Box>
  )
}

export default SpeedDialEx