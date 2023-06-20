import { BottomNavigation, BottomNavigationAction, ThemeProvider, createTheme } from '@mui/material'
import React, { useState } from 'react'
import AddCircleTwoToneIcon from '@mui/icons-material/AddCircleTwoTone';
import AddHomeTwoToneIcon from '@mui/icons-material/AddHomeTwoTone';
import BuildTwoToneIcon from '@mui/icons-material/BuildTwoTone';
import { useNavigate } from 'react-router-dom';

const ThemeProviderEx = () => {

  const [bnValue, setBnValue] = useState(0)
  const navigate = useNavigate()

  const theme = createTheme({
    palette:{
      primary:{
        main: '#8bc34a' ,
      },
      secondary:{
        main: '#9c27b0' ,
      }
    }
  })

  return (
    <ThemeProvider theme={theme}> 
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
    </ThemeProvider>
  )
}

export default ThemeProviderEx