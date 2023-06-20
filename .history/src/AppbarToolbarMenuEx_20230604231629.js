import { AppBar, Box, Button, IconButton, Toolbar, Typography, Menu, MenuItem } from '@mui/material'
// import { Link } from '@mui/material'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const AppbarToolbarMenuEx = () => {

  const navigate = useNavigate()
  const ratingArr = [1, 2, 3, 4, 5]
  const [ratingButton, setRatingButton] = useState(null)

  const handleClose = ()=>{
    setRatingButton(null)
  }

  const handleClick = (e) => {
    setRatingButton(e.currentTarget)
    navigate('/rating')
  }

  return (
    <Box
      // height={10000}
    >
      <AppBar position='static' color='secondary'>
        <Toolbar>

          <IconButton 
            sx={{color:'#ffff', marginLeft:'1rem' }}
          > 
            <MenuBookIcon/> 
          </IconButton>

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

          <Button 
            variant='contained'
            color='success'
            sx={{ m:'1rem' }}
            onClick={handleClick}
          >
            Rating
          </Button>

          {/* Following 'Link' component is a react-router-dom component */}
          <Link to='/accordion' 
            color={'#ffff'} 
            style={{textDecoration:'none', color:'white', fontSize:'1.5rem'}}
          >
            Accordion
          </Link>

        </Toolbar>
      </AppBar>
      <Menu id="ratingMenu" anchorEl={ratingButton} keepMounted open={Boolean(ratingButton)} onClose={handleClose}>
        {ratingArr.map((item, index)=>(<MenuItem key={index} onClick={handleClose}> {item} </MenuItem>))}
      </Menu>
    </Box>
  )
}

export default AppbarToolbarMenuEx