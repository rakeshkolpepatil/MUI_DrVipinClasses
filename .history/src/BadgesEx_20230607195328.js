import { Badge, Box, IconButton, Stack, Typography } from '@mui/material'
import React from 'react'
import MarkunreadTwoToneIcon from '@mui/icons-material/MarkunreadTwoTone';

const BadgesEx = () => {
  return (
    <Box >
      <Typography variant='h4'> MUI Badges Example </Typography>
      <Box m={5}>
        <Stack spacing={2} direction={'row'}>
            <IconButton 
              // size='large' 
              // sx={{width:100, fontSize: 60, height:100}}
              sx={{ fontSize: 200}}
              style={{ 
                '& svg': {fontSize: 200}
              }}
            >
              <Badge badgeContent='3' color='secondary' sx={{ margin:'2rem' }}>
                <MarkunreadTwoToneIcon 
                  size='large' 
                  // sx={{ fontSize: 50 }}
                  style={{ 
                    '& svg': {fontSize: 100}
                  }}
                />
              </Badge>
            </IconButton>
        </Stack>
      </Box>
    </Box>
  )
}

export default BadgesEx