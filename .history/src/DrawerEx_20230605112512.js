import { Box, Drawer, IconButton } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const DrawerEx = () => {

  const [isOpen, setIsOpen] = useState(false)

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