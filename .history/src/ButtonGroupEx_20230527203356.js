import { Button, Stack } from '@mui/material'
import React from 'react'

const ButtonGroupEx = () => {
  return (
    <div>
      <Stack>
        <Button variant='contained'> Red </Button>
        <Button variant='contained'> Blue </Button>
        <Button variant='contained'> Green </Button>
      </Stack>

      <Stack direction='row' mt='1rem'>
        <Button variant='contained'> Red </Button>
        <Button variant='contained'> Blue </Button>
        <Button variant='contained'> Green </Button>
      </Stack>
    </div>
  )
}

export default ButtonGroupEx