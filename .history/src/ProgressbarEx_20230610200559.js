import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, LinearProgress, Stack } from '@mui/material'
import { grey } from '@mui/material/colors'

const ProgressbarEx = () => {



  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI Linear/Circular Progress Bar </Typography>
      <Stack mt={2} spacing={3}>
        <LinearProgress color='secondary'> </LinearProgress>
        <LinearProgress color='primary'> </LinearProgress>
        <LinearProgress variant='determinate' value={60} > </LinearProgress>
      </Stack>
    </Box>
  )
}

export default ProgressbarEx