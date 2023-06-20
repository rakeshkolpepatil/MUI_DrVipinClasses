import { Box, Button } from '@mui/material'
import React from 'react'

const BoxEx = () => {
  return (
    <Box>
      <Box component={'b'}>
        Velit anim esse sit laboris nisi consequat cillum nostrud eu. Veniam
      </Box>
      <Box display={'block'} component={'i'}>
        Velit anim esse sit laboris nisi consequat cillum nostrud eu. Veniam
      </Box>
      <Box display={'block'} component={'u'}>
        Velit anim esse sit laboris nisi consequat cillum nostrud eu. Veniam
      </Box>
      <Box display={'block'} component={'p'}>
        Velit anim esse sit laboris nisi consequat cillum nostrud eu. Veniam
      </Box>
      <Box display={'block'} component={'form'}>
        Velit anim esse sit laboris nisi consequat cillum nostrud eu. Veniam
        <Button display='block'> Submit </Button>
      </Box>

    </Box>
)
}

export default BoxEx