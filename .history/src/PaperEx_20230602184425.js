import { Box, Paper, Typography } from '@mui/material'
import React from 'react'

const PaperEx = () => {
  return (
    <Box>
      <Typography> Material UI Paper Example </Typography>
      <Box
        width={'300px'}
        margin={'2rem'}
        >
        <Paper
          elevation={12}
          padding={'2rem'}
        >
          <Typography variant='h4'> How to improve coding ?</Typography>
          <Typography variant='body2'> 
            Dolore in esse qui irure ad reprehenderit esse eiusmod sint est irure irure. Amet non quis culpa fugiat dolore eiusmod aute amet sit consequat labore enim aliquip. Ex sint ipsum aliquip sit reprehenderit dolore officia sit occaecat. Magna laboris sint nulla culpa ex aliqua quis. Id Lorem proident adipisicing cupidatat. Aliqua mollit reprehenderit non ut exercitation.
          </Typography>
        </Paper>
      </Box>
    </Box>
  )
}

export default PaperEx