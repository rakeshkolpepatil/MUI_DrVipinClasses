import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'

const DialogEx = () => {
  return (
    <Box m={3}>
      <Typography variant="h4" color="secondary.main">
        MUI Dialog Box Example
      </Typography>
      <Box>
        <Button variant="contained" color="primary">
          Open Dialog
        </Button>
      </Box>
    </Box>
  )
}

export default DialogEx