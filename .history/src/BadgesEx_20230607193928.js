import { Badge, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import MarkunreadTwoToneIcon from '@mui/icons-material/MarkunreadTwoTone';

const BadgesEx = () => {
  return (
    <Box m={5}>
      <Typography variant='h5'> MUI Badges Example </Typography>
    <Stack spacing={2} direction={'row'}>
      <Badge>
        <MarkunreadTwoToneIcon size='large'/>
      </Badge>
    </Stack>
    </Box>
  )
}

export default BadgesEx