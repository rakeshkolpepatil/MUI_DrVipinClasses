import { Box, SpeedDial, SpeedDialAction } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import AddHomeTwoToneIcon from '@mui/icons-material/AddHomeTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { grey } from '@mui/material/colors';

const SpeedDialEx = () => {
  return (
    <Box>
      <SpeedDial ariaLabel='speedDial'  style={{color:'grey[400]'}} icon={<AddTwoToneIcon color='secondary'/>} >
        <SpeedDialAction tooltipTitle='Home' icon=<AddHomeTwoToneIcon/> >  </SpeedDialAction>
        <SpeedDialAction tooltipTitle='Rating' icon=<StarsTwoToneIcon/> >  </SpeedDialAction>
        <SpeedDialAction tooltipTitle='Settings' icon=<BuildTwoToneIcon/> >  </SpeedDialAction>
      </SpeedDial>
    </Box>
  )
}

export default SpeedDialEx