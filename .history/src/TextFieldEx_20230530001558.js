import { Box, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const TextFieldEx = () => {
  return (
    <Box>
      <Typography variant='h5'>
        Material UI Text Field Example
      </Typography>
      <Stack spacing={2} direction={'row'}>
        <TextField variant='outlined'> </TextField>
      </Stack>
    </Box>
  )
}

export default TextFieldEx