import { Box, Stack, Step, StepLabel, Stepper, Typography, Button } from '@mui/material'
import React, { useState } from 'react'

const MuiStepperEx = () => {
  const activities = [
    'Shrvanam',
    'Kirtanam',
    'Vishno Smaranam',
    'Pujanam',
    'Vandanam',
    'Dasyam',
    'Sakhyam',
    'Aatmnivedanam'
  ]
  const [stepVar, setStepVar] = useState(0)
  const handlePrevious = () =>{
    setStepVar( (prev)=> prev > 0 ? prev-1 : prev )
  }
  const handleNext = () =>{
    setStepVar( (prev)=> prev < 8 ? prev+1 : prev )
  }

  return (
    <Box>
      <Typography variant="h4" color="secondary">MUI Stepper Example </Typography>
      <Box
        mx={3} mt={2}
      >
        <Stepper activeStep={stepVar}>
          {activities.map( (step, index)=>(
            <Step >
            {/* <Step key={index}> */}
              <StepLabel> {step} </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box m={4}>
        <Stack spacing={2} direction='row'>
            <Button variant="contained" color="secondary" onClick={handlePrevious}>
              Previous
            </Button>
            <Button variant="contained" color="secondary" onClick={handleNext}>
              Next
            </Button>
        </Stack>
            {stepVar}
      </Box>
    </Box>

  )
}

export default MuiStepperEx