import { Box, SpeedDial, SpeedDialAction } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import StarsTwoToneIcon from '@mui/icons-material/StarsTwoTone';
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import AddHomeTwoToneIcon from '@mui/icons-material/AddHomeTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { grey } from '@mui/material/colors';
import BoltTwoToneIcon from '@mui/icons-material/BoltTwoTone';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';

const SpeedDialEx = () => {
  return (
    <Box>
      <SpeedDial 
        ariaLabel='speedDial' 
        style={{color:'grey[400]'}} 
        icon={<SpeedDialIcon />} 
        persistent
        sx={{ position:'absolute', bottom:'1rem', right:'1rem'}}
        endIcon={<BoltTwoToneIcon/>}
      >
        <SpeedDialAction tooltipTitle='Home' tooltipOpen icon=<AddHomeTwoToneIcon/> >  </SpeedDialAction>
        <SpeedDialAction tooltipTitle='Rating' tooltipOpen icon=<StarsTwoToneIcon/> >  </SpeedDialAction>
        <SpeedDialAction tooltipTitle='Settings' tooltipOpen icon=<BuildTwoToneIcon/> >  </SpeedDialAction>
      </SpeedDial>
    </Box>
  )
}

export default SpeedDialEx