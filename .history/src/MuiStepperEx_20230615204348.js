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

  const [skipActivity, setSkipActivity] = useState(new Set())
  const [activeStep, setActiveStep] = useState(0)

  const handlePrevious = () =>{
    setActiveStep( (prev)=> prev > 0 ? prev-1 : prev )
  }

  const handleNext = () =>{
    setActiveStep( (prev)=> prev < 8 ? prev+1 : prev )
  }
  
  const handleReset = () =>{
    setActiveStep(0)
    setSkipActivity(new Set())
  }
  
  const handleSkip = () => {
    setActiveStep( (prev)=> prev < 8 ? prev+1 : prev )
    const newSet = new Set(skipActivity.values)
    newSet.add(activeStep)
    setActiveStep(newSet)
  }

  return (
    <Box>
      <Typography variant="h4" color="secondary">MUI Stepper Example </Typography>
      <Box
        mx={3} mt={2}
      >
        <Stepper activeStep={activeStep}>
          {
            activities.map( (step, index)=> {
                  const stepProps = {}
                  const labelProps = {}
                  if(skipActivity.has(index)){
                    stepProps.completed = false
                    labelProps.optional = (
                      <Typography variant="caption" color="error"> Optional </Typography>
                    )
                  }
                  return(
                  <Step>
                    {/* <Step key={index}> */}
                      <StepLabel> {step} </StepLabel>
                  </Step>
                )
              }
            )
          }
        </Stepper>
      </Box>
      <Box m={4}>
        <Stack spacing={2} direction='row'>
            <Button variant="contained" color="secondary" onClick={handlePrevious}>
              { activeStep > 0 ? "Previous" : "First"}
            </Button>
            <Button variant="contained" color="secondary" onClick={handleNext}>
              { activeStep > 6 ? "Last" : "Next"}
            </Button>
            <Button variant="contained" color="secondary" onClick={handleSkip}>
              Skip Step
            </Button>
            <Button variant="contained" color="secondary" onClick={handleReset}>
              Reset
            </Button>
        </Stack>
            {activeStep}
      </Box>
    </Box>
  )
}

export default MuiStepperEx