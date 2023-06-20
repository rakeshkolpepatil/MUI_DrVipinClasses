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
          <IconButton color='white'> <MenuBookIcon/> </IconButton>
          <Typography variant='h6'>
            Rakesh Classes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppbarToolbarEx