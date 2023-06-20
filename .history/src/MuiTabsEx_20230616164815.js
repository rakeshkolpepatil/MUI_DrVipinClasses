import { Box, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'

const MuiTabsEx = () => {
  return (
    <Box>
      <Typography variant='h4'> MUI Tabs Example </Typography>
      <Tabs>
        <Tab label='Tab 1'/>
        <Tab label='Tab 2'/>
        <Tab label='Tab 3'/>
        <Tab label='Tab 4'/>
      </Tabs>
    </Box>

  )
}

export default MuiTabsEx