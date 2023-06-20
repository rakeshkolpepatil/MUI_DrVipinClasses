import { Box, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'

const MuiSliderEx = () => {

  const [value, setValue] = useState(10)
  const marks = [
    { value: 10, label: '10 Km'},
    { value: 20, label: '20 Km'},
    { value: 30, label: '30 Km'},
    { value: 40, label: '40 Km'},
    { value: 50, label: '50 Km'},
    { value: 60, label: '60 Km'}
  ]
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
          marks = {marks}
          color='secondary'
          size='large'
        />
      </Box>
        Value - {value}
    </Box>
  )
}

export default MuiSliderEx