import { Box, FormControlLabel, Typography } from '@mui/material'
import React from 'react'

const SwitchEx = () => {
  return (
    <Box>
      <Typography variant='h5'> Material Ui Switch Example </Typography>
      <Box>
        <FormControlLabel
          label="Change to Red background color."
        />
      </Box>
    </Box>
  )
}

export default SwitchEx