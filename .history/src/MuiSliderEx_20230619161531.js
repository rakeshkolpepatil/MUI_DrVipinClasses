import { Box, Slider, Typography } from '@mui/material'
import React, { useState } from 'react'

const MuiSliderEx = () => {

  const [value, setValue] = useState(10)
  const [valueArr, setValueArr] = useState([10,30])
  const marks = [
    { value: 0, label: '0 Km'},
    { value: 10, label: '10 Km'},
    { value: 20, label: '20 Km'},
    { value: 30, label: '30 Km'},
    { value: 40, label: '40 Km'},
    { value: 50, label: '50 Km'},
    { value: 60, label: '60 Km'},
    { value: 70, label: '70 Km'},
    { value: 80, label: '80 Km'},
    { value: 90, label: '90 Km'},
    { value: 100, label: '100 Km'}
  ]
  return (
    <Box>
      <Typography variant="h3" color="secondary"> MUI Slider Example </Typography>
      <Box
        width={800}
        mx='auto'
        mt={5}
      >
        <br/>
        <br/>
        <Slider
          value={value}
          onChange={(event, newVal) => setValue(newVal) }
          valueLabelDisplay='auto'
          step={10}
          marks = {marks}
          color='secondary'
          size='large'
        />
        <Typography mt={5} variant="h5" color="primary">
          Value - {value}
        </Typography>
        <br/>
        <br/>
        <br/>
        <Slider
          value={valueArr}
          onChange={(event, newVal) => setValueArr(newVal) }
          valueLabelDisplay='auto'
          step={10}
          marks = {marks}
          color='secondary'
          size='large'
        />
      </Box>
      <Typography mt={5} variant="h5" color="primary">
          Value - {value}
        </Typography>
    </Box>
  )
}

export default MuiSliderEx