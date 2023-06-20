import { Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'

const ChipEx = () => {
  return (
    <Box>
      <Typography variant='h4'> MUI Chip example </Typography>
      <Stack
        spacing={2}
        direction={'row'}
      >
        <Chip> Rakesh Classes</Chip>

      </Stack>
    </Box>
  )
}

export default ChipEx