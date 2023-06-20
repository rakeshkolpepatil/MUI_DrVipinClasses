import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'

const CardVsPaperEx = () => {
  return (
    <Box>
      <Card>
        <CardHeader>
          How to bake ?
        </CardHeader>
        <CardContent>
          <Typography variant='h5' gutterBottom>
            How to bake a cake
          </Typography variant={'body2'}>
          Cupidatat eiusmod deserunt adipisicing veniam nostrud cillum. Pariatur dolore cupidatat magna proident ad amet magna Lorem et nostrud cillum veniam. Ad officia dolore irure eiusmod anim ad. Minim reprehenderit excepteur est ipsum dolore fugiat qui adipisicing duis.
        </CardContent>
      </Card>
    </Box>
  )
}

export default CardVsPaperEx