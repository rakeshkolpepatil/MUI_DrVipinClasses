import { Box, TextField, Typography } from '@mui/material'
import React from 'react'

const DropdownEx = () => {
  return (
    <Box>
      <Typography variant='h5'> Select Options in MUI </Typography>
      <Box 
        mt={'2rem'}
      >
        <TextField
          label="Please select computer language."
          marginTop={5}
        >

        </TextField>
      </Box>
    </Box>
  )
}

export default DropdownEx