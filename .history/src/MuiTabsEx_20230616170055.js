import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'

const MuiTabsEx = () => {
  return (
    <Box>
      <Typography variant='h4'> MUI Tabs Example </Typography>
      <AppBar position='static' color='secondary' mx={2} sx={{ borderRadius: 2}} >
        <Tabs>
          <Tab label='Tab 1'/>
          <Tab label='Tab 2'/>
          <Tab label='Tab 3'/>
          <Tab label='Tab 4'/>
        </Tabs>
      </AppBar>
    </Box>

  )
}

export default MuiTabsEx