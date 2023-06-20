import { Box, Drawer, IconButton, Link, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';

const DrawerEx = () => {

  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(true)
  }

  return (
    <Box>
      <IconButton size='large' onClick={handleClick}>
        <MenuIcon/>
      </IconButton>

      <Drawer
        anchor='left'
        open={isOpen}
        onClose={()=>{setIsOpen(false)}}
        marginTop='3rem'
        sx={{ marginTop: '10rem' }}
      >
        <Stack width={200} spacing={2} >
          <Typography 
            variant='h5' align='center' 
          > 
            Drawer 
          </Typography>
          <Link> Home </Link>
          <Link> Rating </Link>
          <Link> Accordion </Link>
        </Stack>

      </Drawer>
    </Box>
  )
}

export default DrawerEx