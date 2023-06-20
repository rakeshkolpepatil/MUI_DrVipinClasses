import { Box, Stack, Step, StepLabel, Stepper, Typography } from '@mui/material'
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
      <Box>
        <Stack spacing={2} direction='row'>

        </Stack>
      </Box>
    </Box>

  )
}

export default MuiStepperEx