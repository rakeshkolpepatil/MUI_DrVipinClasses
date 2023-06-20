import { Box, Checkbox, FormControl, FormLabel, Typography } from '@mui/material'
import React from 'react'

const CheckboxEx = () => {
  return (
    <Box>
      <Typography variant='h5'> This is CheckBox Example </Typography>
      <FormControl>
        <FormLabel control={<Checkbox />}> India  </FormLabel>
      </FormControl>
    </Box>
  )
}

export default CheckboxEx