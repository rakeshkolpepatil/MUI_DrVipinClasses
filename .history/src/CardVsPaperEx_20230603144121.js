import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import React from 'react'

const CardVsPaperEx = () => {
  return (
    <Box>
      <Card elevation={20}>
        <CardHeader>
          How to bake ?
        </CardHeader>
        <CardContent>
          <Typography variant='h5' gutterBottom>
            How to bake a cake
          </Typography >
          <Typography variant='body2' align='justify'>
            Cupidatat eiusmod deserunt adipisicing veniam nostrud cillum. Pariatur dolore cupidatat magna proident ad amet magna Lorem et nostrud cillum veniam. Ad officia dolore irure eiusmod anim ad. Minim reprehenderit excepteur est ipsum dolore fugiat qui adipisicing duis.
          </Typography>
        </CardContent>
        
        <CardMedia
          component={'img'}
          width={'10%'}
          image='https://images.unsplash.com/photo-1522911715181-6ce196f07c76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80'
          alt='Image of setting sun!'
          sx={{width:'500px'}}
        />

        <CardActions 
          sx={{
            display:'flex',
            flexDirection:'row',
            justifyContent:'center'
          }}
        >
          <Button color="success" sx={{borderRadius:'30px'}}  variant='contained'> Show </Button>
          <Button color="success" sx={{borderRadius:'30px'}} variant='contained'> Learn More </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default CardVsPaperEx