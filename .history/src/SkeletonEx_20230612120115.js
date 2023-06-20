import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, Skeleton, Typography } from '@mui/material'
import React, { useState } from 'react'

const SkeletonEx = () => {

  const [loading, setLoading] = useState(false)

  const handleClick = () => {
    setLoading(!loading)
  }

  return (
    <Box
      m={'1rem'}
    >
      <Card>
        {/* <Avatar> RP </Avatar> */}
        <CardHeader
          avatar={
          loading? <Avatar sizes='small' > RP </Avatar> : <Skeleton variant='circular' > 
            <Avatar></Avatar>
          </Skeleton>
          }
          title='How to cook a good meal ?'
          subheader='10 June 2023'
        />
        <CardContent>
          {
            loading ? 
            <Typography variant="subtitle2" color="initial" align='justify'> 
              Est culpa irure proident voluptate sint. Lorem id exercitation incididunt eu nisi anim ullamco magna aliquip dolore. Commodo reprehenderit esse ipsum incididunt sint aute dolor.
              Amet et officia nisi est in excepteur mollit magna pariatur. Aliqua ut deserunt dolore culpa proident dolor laboris occaecat in nisi nulla nulla irure. Adipisicing esse laborum enim et non duis dolore duis cupidatat culpa Lorem culpa pariatur.
            </Typography>
            :
            <Skeleton variant='rectangular' width='60rem' height='6rem' >
              <Typography sx={{ width:'60rem', height:'6rem', margin:'0px' }} />
            </Skeleton>
          }
        </CardContent>
        <CardActions>
          <Button variant='contained' sx={{ mx:'auto' }} onClick={handleClick}> Loading </Button>
        </CardActions>
      </Card>
      <Typography>  </Typography>
    </Box>
  )
}

export default SkeletonEx