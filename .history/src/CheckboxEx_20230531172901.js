import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Typography } from '@mui/material'
import React from 'react'

const CheckboxEx = () => {
  return (
    <Box>
      <Typography variant='h5'> This is CheckBox Example </Typography>
      <FormControl>
        <FormControlLabel label='India' value='Ind' control={<Checkbox />}> </FormControlLabel>
        <FormControlLabel label='India' value='U' control={<Checkbox />}> </FormControlLabel>
        <FormControlLabel label='India' value='Ind' control={<Checkbox />}> </FormControlLabel>
      </FormControl>
    </Box>
  )
}

export default CheckboxEx