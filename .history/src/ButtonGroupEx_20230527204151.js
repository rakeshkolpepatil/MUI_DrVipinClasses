import { Button, ButtonGroup, Stack } from '@mui/material'
import React from 'react'

const ButtonGroupEx = () => {
  return (
    <div>
      <Stack >
        <ButtonGroup variant='contained'>
          <Button> Red </Button>
          <Button> Blue </Button>
          <Button> Green </Button>
          </ButtonGroup>
      </Stack>

      <Stack direction='row' mt='1rem' justifyContent='center'>
        <Button variant='contained'> Red </Button>
        <Button variant='contained'> Blue </Button>
        <Button variant='contained'> Green </Button>
      </Stack>
    </div>
  )
}

export default ButtonGroupEx