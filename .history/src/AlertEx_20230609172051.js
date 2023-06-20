import { Alert, Box, Stack, Typography } from '@mui/material'
import React from 'react'

const AlertEx = () => {
  return (
    <Box>
      <Typography variant='h4'> MUI Alert Example </Typography>
      <Box
        width={300}
      >
        <Stack spacing={2} direction='column'>
          <Alert color='warning'> This is alert message </Alert>
          <Alert color='success'> This is alert message </Alert>
          <Alert color='primary'> This is alert message </Alert>
          <Alert color='secondary'> This is alert message </Alert>
          <Alert color='error'> This is alert message </Alert>
        </Stack>
      </Box>
    </Box>
  )
}

export default AlertEx