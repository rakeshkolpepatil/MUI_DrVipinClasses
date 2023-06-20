import { Box, Slider, Typography } from '@mui/material'
import React from 'react'

const MuiSliderEx = () => {
  return (
    <Box>
      <Typography variant="h3" color="secondary"> MUI Slider Example </Typography>
      <Box
        width={600}
        mx='auto'
        mt={5}
      >
        <Slider/>
      </Box>
    </Box>
  )
}

export default MuiSliderEx