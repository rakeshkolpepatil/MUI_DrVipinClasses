import { Box, Button } from '@mui/material'
import React from 'react'

const BoxEx = () => {
  return (
    <Box>
      <Box component={'b'} display={'block'} sx={{m:'1rem'}}>
        Dolor enim veniam sunt adipisicing Lorem. Cupidatat nostrud proident dolor cillum minim sit. Consectetur sint esse anim eu voluptate nostrud aliquip eu dolore magna. Laborum magna qui velit commodo deserunt. Cillum enim fugiat non magna sunt aliqua tempor labore do adipisicing aute. Non qui proident nostrud laboris et culpa est minim ad. Ad labore labore nulla ea consectetur aliquip est.
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
      <Box m='1rem' p='1rem' display={'block'} component={'form'}>
        Enim ullamco aliqua fugiat excepteur enim. Officia nostrud laboris Lorem ex sint dolor non enim sunt aliquip incididunt nisi. Est commodo ea in occaecat in exercitation labore voluptate deserunt ad.
      </Box>
      <Box
        bgcolor='secondary.main'
        m='2rem'
        borderRadius='2'
      >
        Box
      </Box>
    </Box>
)
}

export default BoxEx