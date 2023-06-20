import { Box, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'

const RatingEx = () => {

  const [rateVal, setRateVal] = useState(3)

  return (
    <Box>
      <Typography variant='h5'>
        Example of Rating Component in MUI
      </Typography>
      <Rating
        value={rateVal}
        precision={0.25}
      >
      </Rating>
    </Box>
  )
}

export default RatingEx