import { Alert, Box, Stack, Typography } from '@mui/material'
import React from 'react'

const AlertEx = () => {
  return (
    <Box>
      <Typography variant='h4'> MUI Alert Example </Typography>
      <Stack spacing={2} direction='column'>
        <Alert> This is alert message </Alert>
        <Alert> This is alert message </Alert>
        <Alert color='primary'> This is alert message </Alert>
        <Alert color='secondary'> This is alert message </Alert>
      </Stack>
    </Box>
  )
}

export default AlertEx