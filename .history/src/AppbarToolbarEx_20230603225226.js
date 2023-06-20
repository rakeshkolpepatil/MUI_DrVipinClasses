import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'

const AppbarToolbarEx = () => {
  return (
    <Box
      height={10000}
    >
      <AppBar position='static'>
        <Toolbar></Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppbarToolbarEx