import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, LinearProgress, Stack } from '@mui/material'

const ProgressbarEx = () => {



  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI Linear/Circular Progress Bar </Typography>
      <Stack mt={2} spacing={3}>
        <LinearProgress> </LinearProgress>
      </Stack>
    </Box>
  )
}

export default ProgressbarEx