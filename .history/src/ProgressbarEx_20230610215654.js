import React, { useEffect } from 'react'
import Typography from '@mui/material/Typography'
import { Box, Button, CircularProgress, Collapse, LinearProgress, Stack } from '@mui/material'
import { grey } from '@mui/material/colors'
import { useState } from 'react'

const ProgressbarEx = () => {

  const [open, setOpen] = useState()
  const [progress, setProgress] = useState(0)
  const handleClick= () => {
    setProgress(0)
    setOpen(true)
  }

  useEffect( ()=>{
    const timer = setInterval( ()=>{
      setProgress( (prevVal)=> prevVal>=100 ? setOpen(false): prevVal + 10)
    }, 500);
    return (
      ()=>{
        clearInterval(timer)
      }
    )
  },[progress]) 

  return (
    <Box m={3} >
      <Typography variant="h4" color="initial"> 
        MUI Linear/Circular Progress Bar 
      </Typography>

      <Box mt={3}>
        <Button variant='contained' color='secondary' onClick={handleClick} >
          Show Progress
        </Button>
        <Stack mt={5} spacing={2}>
          <Collapse in={open}>
            <CircularProgress variant='determinate' color='secondary' value={progress} />
            <Typography 
              variant="h7" 
              color="initial"
              sx={{ position:'absolute', top:180, left:450 }}
            >
              { progress>0 ? progress : null}
            </Typography>
          </Collapse>
        </Stack>
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