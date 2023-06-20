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
          height={200}
          image=''
          alt='Image of setting sun!'
        >

        </CardMedia>

        <CardActions 
          sx={{align:'center'}}
        >
          <Button color="success" variant='contained'> Show </Button>
          <Button color="success" variant='contained'> Learn More </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default CardVsPaperEx