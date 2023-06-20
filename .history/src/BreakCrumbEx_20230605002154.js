import { Box, Breadcrumbs, Link } from '@mui/material'
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
        <Link href="#"> About </Link>
        <Link href="#"> Contact Us </Link>
      </Breadcrumbs>
    </Box>
  )
}

export default BreakCrumbEx