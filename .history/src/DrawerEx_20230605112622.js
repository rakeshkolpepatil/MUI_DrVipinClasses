import { Box, Drawer, IconButton } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const DrawerEx = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box>
      <IconButton size='large' onClick={handleClick}>
        <MenuIcon/>
      </IconButton>

      <Drawer
        anchor='left'
        open={isOpen}
        onClose={()=>{setIsOpen(false)}}
      >

      </Drawer>
    </Box>
  )
}

export default DrawerEx