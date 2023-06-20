import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'

const MuiTabsEx = () => {
  return (
    <Box>
      <Typography variant='h4'> MUI Tabs Example </Typography>
      <Box sx={{mx:'1rem'}}>
        <AppBar 
          position='inherit' 
          color='warning' 
          maxWidth='100vw'  
          sx={{ borderRadius:2, mt:3 }} 
        >
          <Tabs
            value={activeTab}
            sx={{
              "& .MuiTab-root": { color: '#ffff', fontSize:15 }
            }}
          >
            <Tab label='Tab 1'/>
            <Tab label='Tab 2'/>
            <Tab label='Tab 3'/>
            <Tab label='Tab 4'/>
          </Tabs>
        </AppBar>
      </Box>
    </Box>

  )
}

export default MuiTabsEx