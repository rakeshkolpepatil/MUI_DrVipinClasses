import { AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'

const AccordionEx = () => {
  return (
    <Box>
      <Typography> MUI Accordion Example </Typography>
      <AccordionSummary>
        Who am I ?
      </AccordionSummary>
      <AccordionDetails variant={'body1'}>
        Cillum consequat adipisicing Lorem sunt eiusmod aute in. Nulla ipsum reprehenderit sit in duis esse consequat minim voluptate voluptate anim adipisicing enim. Commodo duis aliquip deserunt id nisi in exercitation ut consectetur magna.
      </AccordionDetails>
    </Box>
  )
}

export default AccordionEx