import React from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, CircularProgress, LinearProgress, Stack } from '@mui/material'
import { grey } from '@mui/material/colors'

const ProgressbarEx = () => {



  return (
    <Box m={3} >
      <Typography variant="h4" color="initial"> 
        MUI Linear/Circular Progress Bar 
      </Typography>

      <Box mt={3}>
        <Button variant='contained' >

        </Button>
      </Box>

      {/* <Box>
        <Stack mt={2} spacing={3}>
          <LinearProgress color='secondary'> </LinearProgress>
          <LinearProgress color='primary'> </LinearProgress>
          <LinearProgress variant='determinate' value={60} > </LinearProgress>
          <LinearProgress variant='buffer' value={60} valueBuffer={40} > </LinearProgress>
        </Stack>

        <Stack mt={2} spacing={3}>
          <CircularProgress color='secondary'> </CircularProgress>
          <CircularProgress color='primary'> </CircularProgress>
          <CircularProgress variant='determinate' value={60} > </CircularProgress>
        </Stack>
      </Box> */}

    </Box>
  )
}

export default ProgressbarEx