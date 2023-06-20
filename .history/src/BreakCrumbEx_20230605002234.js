import { Box, Breadcrumbs, Button, Link } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BreakCrumbEx = () => {
  return (
    <Box>
      <Breadcrumbs 
        separator={<NavigateNextIcon/>}
        marginLeft={2}  
      >
        <Link href="#"> Home </Link>
        <Link href="#"> Product </Link>
        <Link href="#"> Service </Link>
        <Link href="#"> About </Link>
        <Link href="#"> Contact Us </Link>
        <Button> Click Me </Button>
      </Breadcrumbs>
    </Box>
  )
}

export default BreakCrumbEx