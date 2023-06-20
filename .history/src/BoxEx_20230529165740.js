import { Box, Button } from '@mui/material'
import React from 'react'

const BoxEx = () => {
  return (
    <Box>
      <Box component={'b'} display={'block'} sx={{m:'10px'}}>
        Velit anim esse sit laboris nisi consequat cillum nostrud eu. Veniam
      </Box>
      <Box display={'block'} component={'i'} sx={{mb:'10px'}}>
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
        <Button sx={{display:'flex', mx:'auto'}} > Submit </Button>
      </Box>

    </Box>
)
}

export default BoxEx