import { Box, Button, Snackbar, Typography } from '@mui/material'
import React from 'react'

const SnakbarEx = () => {
  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI  Snakbar Example </Typography>

      <Box mt={'3rem'}>
        <Button variant='contained'>
          Show Snackbar
        </Button>
      </Box>
      <Snackbar/>
    </Box>
  )
}

export default SnakbarEx