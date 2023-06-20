import { Box, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'

const RatingEx = () => {

  const [rateVal, setRateVal] = useState(3)

  return (
    <Box>
      <Typography variant='h5'>
        Example of Rating Component in MUI
      </Typography>
      <Box margin={3}
        display='flex'
        justifyContent={'flex-start'}
      >
        <Rating
          value={rateVal}
          precision={0.10}
          onChange={(e)=>setRateVal(e.target.value)}
        >
        </Rating>
      </Box>

    </Box>
  )
}

export default RatingEx