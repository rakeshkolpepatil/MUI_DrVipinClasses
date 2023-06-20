import { Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'

const ChipEx = () => {
  return (
    <Box m={4}>  
      <Typography variant='h4'> MUI Chip example </Typography>
      <Stack
        spacing={2}
        direction={'row'}
        margin={'2rem'}
      >
        <Chip label={'Computer Science'} />

      </Stack>
    </Box>
  )
}

export default ChipEx