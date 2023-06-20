import { BottomNavigation, Box, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import AddHomeTwoToneIcon from '@mui/icons-material/AddHomeTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import { useNavigate } from 'react-router-dom';

const BottomNavigationEx = () => {

  const [bnValue, setBnValue] = useState(0)
  const navigate = useNavigate()

  return (
      <BottomNavigation
        showLabels={true}
        sx={{
          position:"absolute",
          bottom: "0px",
          width: "100%"
        }}
        value={bnValue}
        onChange={ (event, value) => setBnValue(value)}  
      >
        <BottomNavigationAction 
          label="Home" 
          value={"Home"} 
          icon={<AddHomeTwoToneIcon/>} 
          onClick={()=>{ navigate( "/dropdown" ) }}
        />

        <BottomNavigationAction 
          label="Rating" 
          value={"Rating"} 
          icon={<AddCircleTwoToneIcon/>} 
          onClick={()=>{ navigate( "/radio" ) }}
        />

        <BottomNavigationAction 
          label="Accordion" 
          value={"Accordion"} 
          icon={<BuildTwoToneIcon/>} 
          onClick={()=>{ navigate( "/accordion" ) }}
        />

      </BottomNavigation>
  )
}

export default BottomNavigationEx