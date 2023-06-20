import { Avatar, Box, Card, CardHeader, Typography } from '@mui/material'
import React from 'react'

const SkeletonEx = () => {
  return (
    <Box
      m={'1rem'}
    >
      <Card>
        <CardHeader>
          <Avatar> </Avatar>
          How to master Coding ?
        </CardHeader>
      </Card>
      <Typography>  </Typography>
    </Box>
  )
}

export default SkeletonEx