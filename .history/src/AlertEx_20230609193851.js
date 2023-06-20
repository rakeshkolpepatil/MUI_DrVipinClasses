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

        <Stack spacing={2}>
          <Button 
            variant='contained' 
            color='secondary' 
            sx={{ marginTop: '20px' }} 
            onClick={ handleClick }
          >
            Show Alert
          </Button>
          <Collapse in={open}>
            <Alert> Alert inside Collapse Component </Alert>
          </Collapse>
        </Stack>
      </Box>
    </Box>
  )
}

export default AlertEx