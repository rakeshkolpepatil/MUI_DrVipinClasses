import { Badge, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import MarkunreadTwoToneIcon from '@mui/icons-material/MarkunreadTwoTone';

const BadgesEx = () => {
  return (
    <Box >
      <Typography variant='h5'> MUI Badges Example </Typography>
      <Box m={5}>
        <Stack spacing={2} direction={'row'}>
          <Badge>
            <MarkunreadTwoToneIcon size='large'/>
          </Badge>
        </Stack>
      </Box>
    </Box>
  )
}

export default BadgesEx