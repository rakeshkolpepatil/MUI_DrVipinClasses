import { BottomNavigation, Box, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import AddHomeTwoToneIcon from '@mui/icons-material/AddHomeTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';

const BottomNavigationEx = () => {

  const [bnValue, setBnValue] = useState(0)

  return (
      <BottomNavigation
        value={bnValue}
        onChange={ (event, value) => setBnValue(value)}  
      >
        <BottomNavigationAction label="Home" value={bnValue} icon={<AddCircleTwoToneIcon/>} />
        <BottomNavigationAction label="Rating" value={bnValue} icon={<AddHomeTwoToneIcon/>} />
        <BottomNavigationAction label="Accordion" value={bnValue} icon={<BuildTwoToneIcon/>} />
      </BottomNavigation>
  )
}

export default BottomNavigationEx