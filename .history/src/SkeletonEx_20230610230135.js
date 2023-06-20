import { Avatar, Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'

const SkeletonEx = () => {
  return (
    <Box
      m={'1rem'}
    >
      <Card>
        {/* <Avatar> RP </Avatar> */}
        <CardHeader>
          
        </CardHeader>
        <CardContent>
          <Typography variant="h4" color="initial"> How to master Coding ? </Typography>

        </CardContent>
      </Card>
      <Typography>  </Typography>
    </Box>
  )
}

export default SkeletonEx