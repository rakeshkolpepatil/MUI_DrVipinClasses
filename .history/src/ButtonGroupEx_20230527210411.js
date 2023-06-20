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
      <ButtonGroup variant='outlined' sx={{display:'block', m:'1rem'}}>
        {buttonsArr}
      </ButtonGroup>
      <ButtonGroup variant='text' sx={{display:'block', m:'1rem'}}>
        {buttonsArr}
      </ButtonGroup>
      <ButtonGroup variant='contained' disableElevation orientation='vertical' sx={{border:'0', width:'100px'}}>
        {buttonsArr}
      </ButtonGroup>
      
    </Box>
  )
}

export default ButtonGroupEx