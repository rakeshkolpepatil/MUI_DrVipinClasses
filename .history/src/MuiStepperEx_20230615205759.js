import { Box, Stack, Step, StepLabel, Stepper, Typography, Button, StepContent } from '@mui/material'
import React, { useState } from 'react'

const MuiStepperEx = () => {
  const activities = [
    'Shrvanam',
    'Kirtanam',
    'Vishno Smaranam',
    'Paad-sevanam',
    'Archanam',
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
    const newSet = new Set(skipActivity.values())
    newSet.add(activeStep)
    setSkipActivity( newSet)
  }

  return (
    <Box>
      <Typography variant="h4" color="secondary">MUI Stepper Example </Typography>
      <Box
        mx={3} mt={2}
      >
        <Stepper activeStep={activeStep}  
          // alternativeLabel

          orientation='vertical'
        >

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
                  <Step {...stepProps}>
                    {/* <Step key={index}> */}
                      <StepLabel {...labelProps}> {step} </StepLabel>
                      { index ==2 && <StepContent> <img src='https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8=' /> </StepContent> }
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