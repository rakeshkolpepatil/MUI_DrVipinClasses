import { Box, SpeedDial, SpeedDialAction, useTheme } from '@mui/material'
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
import { useNavigate } from 'react-router-dom';
import DropdownEx from './DropdownEx';

const SpeedDialEx = () => {

  const theme = useTheme()
  const navigate = useNavigate()

  return (
      <SpeedDial 
        ariaLabel='speedDial' 
        style={{color:'grey[600]'}} 
        icon={<SpeedDialIcon openIcon={<BoltTwoToneIcon/>}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize:'4rem',
              marginTop: '-20px',
              marginLeft:'-5px'
            }
          }}
        />} 
        persistent
        sx={{ position:'absolute', 
          bottom:'1rem',
          right:'1rem',
          '& .MuiFab-primary': { 
            backgroundColor: theme.palette.grey[700] , color: 'white', width: 100, height: 100, '& .MuiSpeedDialIcon-icon': { fontSize: 30, fontSize: '54px', marginTop: '-15px', marginLeft:'2px' }, '&:hover': {backgroundColor: 'green'}
          }
        }}
        endIcon={<BoltTwoToneIcon color='black'/>}
      >
        <SpeedDialAction 
          tooltipTitle='Home' 
          tooltipOpen 
          onClick={()=>navigate('/dropdown')}
          icon=<AddHomeTwoToneIcon />
        />
        <SpeedDialAction 
          tooltipTitle='Rating' 
          tooltipOpen 
          onClick={()=>navigate('/accordion')}
          icon=<StarsTwoToneIcon/> 
        />
        <SpeedDialAction 
          tooltipTitle='Settings' 
          tooltipOpen 
          onClick={()=>navigate('/radio')}
          icon=<BuildTwoToneIcon/> 
        />
      </SpeedDial>
  )
}

export default SpeedDialEx