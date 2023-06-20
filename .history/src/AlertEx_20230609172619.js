import { Alert, Box, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'

const AlertEx = () => {
  return (
    <Box>
      <Typography variant='h4'> MUI Alert Example </Typography>
      <Box
        width={500}
        marginTop={5}
        mx='auto'
      >
        <Stack spacing={2} direction='column'>
          <Alert color='warning'> This is alert message </Alert>
          <Alert color='success' variant='outlined'> This is alert message </Alert>
          <Alert color='primary' variant='filled'> This is alert message </Alert>
          <Alert color={'grey[900]'} > This is alert message </Alert>
          <Alert color='error'> This is alert message </Alert>
        </Stack>
      </Box>
    </Box>
  )
}

export default AlertEx