import { Box, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'

const MuiSliderEx = () => {

  const [value, setValue] = useState(10)

  return (
    <Box>
      <Typography variant="h3" color="secondary"> MUI Slider Example </Typography>
      <Box
        width={600}
        mx='auto'
        mt={5}
      >
        <Slider
          value={value}
          onChange={(event, newVal) => setValue(newVal) }
          valueLabelDisplay='auto'
          step={10}
          marks
        />
      </Box>
        Value - {value}
    </Box>
  )
}

export default MuiSliderEx