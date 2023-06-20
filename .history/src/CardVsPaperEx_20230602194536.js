import { Box, Button, Card, CardActions, CardContent, CardHeader, Typography } from '@mui/material'
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
        <CardActions>
          <Button color="success"> Show </Button>
          <Button color="success"> Learn More </Button>
        </CardActions>
      </Card>
    </Box>
  )
}

export default CardVsPaperEx