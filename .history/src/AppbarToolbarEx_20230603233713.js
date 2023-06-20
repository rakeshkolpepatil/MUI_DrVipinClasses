import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
// import { Link } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import React from 'react'
import { Link } from 'react-router-dom';

const AppbarToolbarEx = () => {
  return (
    <Box
      // height={10000}
    >
      <AppBar position='static' color='secondary'>
        <Toolbar>
          <IconButton 
            sx={{color:'#ffff', marginLeft:'1rem' }}> <MenuBookIcon/> </IconButton>
          <Typography variant='h6'
            align='left'
            ml={1}
            sx={{flexGrow: 1 }}
          >
            Rakesh Classes
          </Typography>

          {/* <Typography variant='h6'> Accordion </Typography> */}

          {/* Following 'Link' component is a Material UI 'Link' component. */}
          {/* <Link href='/accordion' color={'#ffff'} fontSize={18} sx={{textDecoration:'none'}}>
            Accordion
          </Link> */}

          {/* Following 'Link' component is a react-router-dom component */}
          <Link to='/accordion' 
            color={'#ffff'} 
            style={{textDecoration:'none', color:'white', fontSize:'1.5rem'}}
          >
            Accordion
          </Link>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default AppbarToolbarEx