import { Alert, Box, Button, Collapse, Stack, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React, { useState } from 'react'

const AlertEx = () => {

  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
  }

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
        
        <Box 
          marginTop={5}
        >
          <Button 
            variant='contained' 
            color='secondary' 
            sx={{ marginTop: '20px' }} 
            onClick={ handleClick }
            sx={{ marginLeft: 0 }}
          >
            Show Alert
          </Button>
          <Stack spacing={2} mt={2}>
            <Collapse in={open}>
              <Alert severity='success' variant='filled'>
                Alert inside Collapse Component
              </Alert>
            </Collapse>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default AlertEx