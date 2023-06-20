import { Avatar, Box, Card, CardHeader, Typography } from '@mui/material'
import React from 'react'

const SkeletonEx = () => {
  return (
    <Box
      m={'1rem'}
    >
      <Card>
        <Avatar> RP </Avatar>
        <CardHeader>
          How to master Coding ?
        </CardHeader>
      </Card>
      <Typography>  </Typography>
    </Box>
  )
}

export default SkeletonEx