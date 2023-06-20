import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'

const PaperEx = () => {
  return (
    <Box>
      <Typography variant='h3'> Material UI Paper Example </Typography>

      <Stack 
        direction={'row'}
        alignContent={'center'}
        mx={'auto'}
        spacing={3}
        justifyContent={'center'}
        mt={'2rem'}
      >
        <Box
          width={'300px'}
          >
          <Paper
            elevation={15}
            sx={{padding: '1rem'}}
          >
            <Typography variant='h4' gutterBottom> How to improve coding ?</Typography>
            <Typography variant='body2' align='justify' > 
              Dolore in esse qui irure ad reprehenderit esse eiusmod sint est irure irure. Amet non quis culpa fugiat dolore eiusmod aute amet sit consequat labore enim aliquip. Ex sint ipsum aliquip sit reprehenderit dolore officia sit occaecat. Magna laboris sint nulla culpa ex aliqua quis. Id Lorem proident adipisicing cupidatat. Aliqua mollit reprehenderit non ut exercitation.
            </Typography>
          </Paper>
        </Box>

        <Box
          width={'300px'}
          >
          <Paper
            elevation={15}
            sx={{padding: '1rem'}}
          >
            <Typography variant='h4' gutterBottom> How to improve coding ?</Typography>
            <Typography variant='body2' align='justify' > 
              Dolore in esse qui irure ad reprehenderit esse eiusmod sint est irure irure. Amet non quis culpa fugiat dolore eiusmod aute amet sit consequat labore enim aliquip. Ex sint ipsum aliquip sit reprehenderit dolore officia sit occaecat. Magna laboris sint nulla culpa ex aliqua quis. Id Lorem proident adipisicing cupidatat. Aliqua mollit reprehenderit non ut exercitation.
            </Typography>
          </Paper>
        </Box>
      </Stack>

    </Box>
  )
}

export default PaperEx