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
        marginTop={'2rem'}
        mx={'auto'}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color='secondary'/>}
          >
            <Typography variant='h7'>
              Who am I ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails variant={'body1'} align='justify'>
            Cillum consequat adipisicing Lorem sunt eiusmod aute in. Nulla ipsum reprehenderit sit in duis esse consequat minim voluptate voluptate anim adipisicing enim. Commodo duis aliquip deserunt id nisi in exercitation ut consectetur magna.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color='secondary'/>}
          >
            <Typography variant='h7'>
              What I am currently doing ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails variant={'body1'} align='justify'>
            Cillum consequat adipisicing Lorem sunt eiusmod aute in. Nulla ipsum reprehenderit sit in duis esse consequat minim voluptate voluptate anim adipisicing enim. Commodo duis aliquip deserunt id nisi in exercitation ut consectetur magna.
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon color='secondary'/>}
          >
            <Typography variant='h7' color={'secondary'}>
              What are my future plans ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails variant={'body1'} align='justify'>
            Ipsum aliquip sunt duis dolore incididunt laboris anim. Commodo proident adipisicing nisi proident velit velit. Culpa deserunt non eiusmod Lorem irure.
          </AccordionDetails>
        </Accordion>

      </Box>
    </Box>
  )
}

export default AccordionEx