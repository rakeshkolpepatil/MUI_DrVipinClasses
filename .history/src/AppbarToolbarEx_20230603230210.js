import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import React from 'react'

const AppbarToolbarEx = () => {
  return (
    <Box
      height={10000}
    >
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <IconButton 
            sx={{color:'#ffff', marginX:'1rem' }}> <MenuBookIcon/> </IconButton>
          <Typography variant='h6' sx={{flexGrow: 1}}>
            Rakesh Classes
          </Typography>
          <Typography variant='h6'> Accordion </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppbarToolbarEx