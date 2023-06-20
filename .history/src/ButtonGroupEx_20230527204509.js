import { Button, ButtonGroup, Stack } from '@mui/material'
import React from 'react'

const buttonsArr = [
  <Button> One </Button>,
  <Button> Two </Button>,
  <Button> Three </Button>
]

const ButtonGroupEx = () => {
  return (
    <div>
      <Stack >
        <ButtonGroup variant='contained'>
          {buttonsArr}
        </ButtonGroup>

        <ButtonGroup variant='outlined'>
          {buttonsArr}
        </ButtonGroup>

        <ButtonGroup variant='text'>
          {buttonsArr}
        </ButtonGroup>
      </Stack>

      <Stack direction='row' justifyContent='center'>
        <Button variant='contained'> Red </Button>
        <Button variant='contained'> Blue </Button>
        <Button variant='contained'> Green </Button>
      </Stack>
    </div>
  )
}

export default ButtonGroupEx