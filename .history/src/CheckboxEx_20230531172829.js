import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Typography } from '@mui/material'
import React from 'react'

const CheckboxEx = () => {
  return (
    <Box>
      <Typography variant='h5'> This is CheckBox Example </Typography>
      <FormControl>
        <FormControlLabel label='India' control={<Checkbox />}> India  </FormControlLabel>
      </FormControl>
    </Box>
  )
}

export default CheckboxEx