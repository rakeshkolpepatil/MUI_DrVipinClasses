import { Box, Drawer, IconButton } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const DrawerEx = () => {
  return (
    <Box>
      <IconButton>
        <MenuIcon/>
      </IconButton>

      <Drawer
        anchor='left'
        open={isOpen}
      >

      </Drawer>
    </Box>
  )
}

export default DrawerEx