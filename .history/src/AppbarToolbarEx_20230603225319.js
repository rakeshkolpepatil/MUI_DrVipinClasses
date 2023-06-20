import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const AppbarToolbarEx = () => {
  return (
    <Box
      height={10000}
    >
      <AppBar position='static' color='secondary'>
        <Toolbar>

          <Typography>
            Rakesh Classes
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppbarToolbarEx