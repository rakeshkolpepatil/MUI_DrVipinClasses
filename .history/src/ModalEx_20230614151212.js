import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'

const ModalEx = () => {
  return (
    <Box> 
      <Typography variant="h3" color="initial"> MUI Modal Example </Typography>
      <Button
        component='Box'
        color='secondary' variant='contained' >
        Show Modal
      </Button>
    </Box>

  )
}

export default ModalEx