import { Button, ButtonGroup, Stack } from '@mui/material'
import React from 'react'

const ButtonGroupEx = () => {
  return (
    <div>
      <Stack sx={{ width:'10%', mx:'auto', mt:'3rem' }}>
        <ButtonGroup>
          <Button variant='contained'> Red </Button>
          <Button variant='contained'> Blue </Button>
          <Button variant='contained'> Green </Button>
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