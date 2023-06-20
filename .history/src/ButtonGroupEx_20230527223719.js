import { Box, Button, ButtonGroup, Stack } from '@mui/material'
import React from 'react'

const buttonsArr = [
  <Button> One </Button>,
  <Button color='secondary' border='1px solid white'> Two </Button>,
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
      <ButtonGroup variant='contained' disableElevation orientation='vertical' size='small' sx={{border:'1px solid white', width:'100px', mx:'auto', my:'10px'}}>
        {buttonsArr}
      </ButtonGroup>

      <ButtonGroup variant='contained' disableElevation size='medium' sx={{ mx:'auto'}}>
        {buttonsArr}
      </ButtonGroup>

      <ButtonGroup variant='contained' disableElevation orientation='vertical' size='large' sx={{border:'1px solid white', width:'100px', mx:'auto', my:'10px'}}>
        {buttonsArr}
      </ButtonGroup>
      
    </Box>
  )
}

export default ButtonGroupEx