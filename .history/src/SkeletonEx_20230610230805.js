import { Avatar, Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'

const SkeletonEx = () => {
  return (
    <Box
      m={'1rem'}
    >
      <Card>
        {/* <Avatar> RP </Avatar> */}
        <CardHeader
          avatar={<Avatar sizes='small' > RP </Avatar>}
          title='How to cook a good meal ?'
          subheader='10 June 2023'
        />
        <CardContent>
          <Typography variant="h6" color="initial"> 
            Est culpa irure proident voluptate sint. Lorem id exercitation incididunt eu nisi anim ullamco magna aliquip dolore. Commodo reprehenderit esse ipsum incididunt sint aute dolor.
          </Typography>
        </CardContent>
      </Card>
      <Typography>  </Typography>
    </Box>
  )
}

export default SkeletonEx