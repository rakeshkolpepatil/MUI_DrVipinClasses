import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, CircularProgress, LinearProgress, Stack } from '@mui/material'
import { grey } from '@mui/material/colors'

const ProgressbarEx = () => {



  return (
    <Box>
      <Typography variant="h4" color="initial"> MUI Linear/Circular Progress Bar </Typography>
      <Stack mt={2} spacing={3}>
        <LinearProgress color='secondary'> </LinearProgress>
        <LinearProgress color='primary'> </LinearProgress>
        <LinearProgress variant='determinate' value={60} > </LinearProgress>
        <LinearProgress variant='determinate' value={60}  > </LinearProgress>
      </Stack>

      <Stack mt={2} spacing={3}>
        <CircularProgress color='secondary'> </CircularProgress>
        <CircularProgress color='primary'> </CircularProgress>
        <CircularProgress variant='determinate' value={60} > </CircularProgress>
        <CircularProgress variant='determinate' value={60}  > </CircularProgress>
      </Stack>
    </Box>
  )
}

export default ProgressbarEx