import { Box, Breadcrumbs, Button, Link } from '@mui/material'
import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const BreakCrumbEx = () => {
  return (
    <Box>
      <Breadcrumbs 
        aria-label="MUI braedcrumbs"
        separator={<NavigateNextIcon fontSize='small'/>}
        marginLeft={2}  
        maxItems={2}
        itemsBeforeCollapse={2}
        itemsAfterCollapse={3}
      >
        <Link href="#" underline='hover'> Home </Link>
        <Link href="#" underline='hover'> Product </Link>
        <Link href="#" underline='hover'> Service </Link>
        <Link href="#" underline='hover'> About </Link>
        <Link href="#" underline='hover'> Contact Us </Link>
        <Button variant='text'> Click Me </Button>
      </Breadcrumbs>
    </Box>
  )
}

export default BreakCrumbEx