import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const DropdownEx = () => {
  return (
    <Box>
      <Typography variant='h5'> Select Options in MUI </Typography>
      <Box>
        <TextField
          label="Please select computer language."
          marginTop={2}
        >

        </TextField>
      </Box>
    </Box>
  )
}

export default DropdownEx