import { Box, Button, ButtonGroup, Stack } from '@mui/material'
import React from 'react'

const buttonsArr = [
  <Button> One </Button>,
  <Button> Two </Button>,
  <Button> Three </Button>
]

const ButtonGroupEx = () => {
  return (
    <Box display='flex' flexDirection='column' >
      <ButtonGroup variant='contained' sx={{disply:'block', m:'1rem'}}>
        {buttonsArr}
      </ButtonGroup>
      <ButtonGroup variant='outlined' sx={{display:'block', m:'1rem'}}>
        {buttonsArr}
      </ButtonGroup>
      <ButtonGroup variant='text' sx={{display:'block', m:'1rem'}}>
        {buttonsArr}
      </ButtonGroup>

      
    </Box>
  )
}

export default ButtonGroupEx