import { BottomNavigation, Box, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import AddHomeTwoToneIcon from '@mui/icons-material/AddHomeTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';

const BottomNavigationEx = () => {

  const [bnValue, setBnValue] = useState(0)

  return (
      <BottomNavigation
        sx={{
          position:"absolute",
          bottom: "0px",
          width: "100%"
        }}
        value={bnValue}
        onChange={ (event, value) => setBnValue(value)}  
      >
        <BottomNavigationAction label="Home" value={"Home"} icon={<AddCircleTwoToneIcon/>} />
        <BottomNavigationAction label="Rating" value={"Rating"} icon={<AddHomeTwoToneIcon/>} />
        <BottomNavigationAction label="Accordion" value={"Accordion"} icon={<BuildTwoToneIcon/>} />
      </BottomNavigation>
  )
}

export default BottomNavigationEx