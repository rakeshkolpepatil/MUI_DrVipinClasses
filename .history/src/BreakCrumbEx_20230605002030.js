import { Box, Breadcrumbs, Link } from '@mui/material'
import React from 'react'

const BreakCrumbEx = () => {
  return (
    <Box>
      <Breadcrumbs>
        <Link href="#"> Home </Link>
        <Link href="#"> About </Link>
        <Link href="#"> Contact Us </Link>
      </Breadcrumbs>
    </Box>
  )
}

export default BreakCrumbEx