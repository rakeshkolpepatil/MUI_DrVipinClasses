import { Box, Chip, Stack, Typography } from '@mui/material'
import React from 'react'
import Face3Icon from '@mui/icons-material/Face3';

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
        <Chip variant='outlined' label={'Computer Science'} />
        <Chip variant='outlined' color='secondary' label={'Computer Science'} />
        <Chip variant='filled' color='secondary' label={'Computer Science'} />
        <Chip variant='filled' color='secondary' icon={<Face3Icon />} label={'Computer Science'} />

      </Stack>
    </Box>
  )
}

export default ChipEx