import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const AccordionEx = () => {
  return (
    <Box
      padding={'2rem'}
    >
      <Typography variant='h5'> MUI Accordion Example </Typography>
      <Box 
        width={'90%'}
        // marginLeft={'15px'}
        marginTop={'10px'}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
          >
            <Typography variant='h7'>
              Who am I ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails variant={'body1'}>
            Cillum consequat adipisicing Lorem sunt eiusmod aute in. Nulla ipsum reprehenderit sit in duis esse consequat minim voluptate voluptate anim adipisicing enim. Commodo duis aliquip deserunt id nisi in exercitation ut consectetur magna.
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}

export default AccordionEx