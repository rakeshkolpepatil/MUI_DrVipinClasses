import { BottomNavigation, Box, BottomNavigationAction } from '@mui/material'
import React, { useState } from 'react'

const BottomNavigationEx = () => {
  const [bnValue, setBnValue] = useState()
  return (
      <BottomNavigation>
        <BottomNavigationAction label="Home" value={} icon={} />
        <BottomNavigationAction label="Rating" value={} icon={} />
        <BottomNavigationAction label="Accordion" value={} icon={} />
      </BottomNavigation>
  )
}

export default BottomNavigationEx