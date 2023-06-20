import { Box, Button, ButtonGroup, Stack } from '@mui/material'
import React from 'react'

const buttonsArr = [
  <Button> One </Button>,
  <Button> Two </Button>,
  <Button> Three </Button>
]

const ButtonGroupEx = () => {
  return (
    <Box display='flex' flexDirection='column' m='1rem' p='1rem'>
      <ButtonGroup variant='contained'  sx={{display:'block', p: '1rem', m:'1rem'}}>
        {buttonsArr}
      </ButtonGroup>
      <ButtonGroup variant='outlined' sx={{display:'block', p: '1rem', m:'1rem'}}>
        {buttonsArr}
      </ButtonGroup>
      <ButtonGroup variant='text' sx={{display:'block', p: '1rem', m:'1rem'}}>
        {buttonsArr}
      </ButtonGroup>

      <Stack direction='row' justifyContent='center'>
        <Button variant='contained'> Red </Button>
        <Button variant='contained'> Blue </Button>
        <Button variant='contained'> Green </Button>
      </Stack>
    </Box>
  )
}

export default ButtonGroupEx