import { AppBar, Box, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'

const MuiTabsEx = () => {

  const [activeTab, setActiveTab] = useState()
  
  return (
    <Box>
      <Typography variant='h4'> MUI Tabs Example </Typography>
      <Box sx={{mx:'1rem'}}>
        <AppBar 
          position='inherit' 
          // color='warning' 
          color='secondary' 
          maxWidth='100vw'  
          sx={{ borderRadius:2, mt:3 }} 
        >
          <Tabs
            value={activeTab}
            onChange={ (e, newVal) => setActiveTab(newVal) }
            centered
            variant='scrollable'
            // variant='fullWidth'
            sx={{
              "& .MuiTab-root": { color: '#ffff', fontSize:15 },
              "& .Mui-selected": { color: '#ffff'},
              
              // "& .MuiButtonBase-root.MuiTab-root:hover": { color: '#ffff'},

              "& .MuiTabs-indicator": {
                backgroundColor: 'green',
                borderRadius: '5px',
                height:'7px'
              }
            }}
          >
            <Tab label='Tab 1'/>
            <Tab label='Tab 2'/>
            <Tab label='Tab 3'/>
            <Tab label='Tab 4'/>
            <Tab label='Tab 5'/>
            <Tab label='Tab 6'/>
            <Tab label='Tab 7'/>
          </Tabs>
        </AppBar>
      </Box>
    </Box>

  )
}

export default MuiTabsEx