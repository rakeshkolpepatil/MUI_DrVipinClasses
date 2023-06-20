import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'

const RadioEx = () => {
  return (
    <Box>
      <Typography> Example of Radio Button </Typography>
      <FormControl
        align="left"
      >
        <FormLabel>
          Please Select your country -
        </FormLabel>
        <RadioGroup>
          <FormControlLabel label="India" value='India' control={<Radio color="secondary"/>}></FormControlLabel>
          <FormControlLabel label="America" value='USA' control={<Radio color="primary"/>}></FormControlLabel>
          <FormControlLabel label="Russia" value='USSR' control={<Radio color="success"/>}></FormControlLabel>
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default RadioEx