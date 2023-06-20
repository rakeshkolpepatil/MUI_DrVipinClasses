import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material'
import React from 'react'

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
  const [stepVar, setStepVar] = useState()
  
  return (
    <Box>
      <Typography variant="h4" color="secondary">MUI Stepper Example </Typography>
      <Box
        mx={3} mt={2}
      >
        <Stepper activeStep={stepVar}>
          {activities.map( (step, index)=>(
            <Step key={index}>
              <StepLabel> {step} </StepLabel>
            </Step>
          ))}
        </Stepper>

      </Box>
    </Box>
  )
}

export default MuiStepperEx