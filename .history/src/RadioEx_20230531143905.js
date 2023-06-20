import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'

const RadioEx = () => {
  return (
    <Box>
      <Typography> Example of Radio Button </Typography>
      <FormControl>
        <FormLabel>
          Please Select your country -
        </FormLabel>
        <RadioGroup>
          <FormControlLabel label="India" value='India' control={<Radio color="secondary" />}></FormControlLabel>
        </RadioGroup>
      </FormControl>
    </Box>
  )
}

export default RadioEx