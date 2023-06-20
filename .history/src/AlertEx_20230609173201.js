import { Alert, Box, Button, Stack, Typography } from '@mui/material'
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
          <Alert sx={{ backgroundColor: 'grey.500' }} > This is alert message </Alert>
          <Alert color='error'> This is alert message </Alert>
        </Stack>

        <Stack>
          <Button 
            variant='contained' 
            color='secondary' 
            sx={{ marginTop: '20px' }} 
            onClick={{  }}
          >
            Show Alert
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default AlertEx