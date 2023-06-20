import { Box, Rating, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const RatingEx = () => {

  const [rateVal, setRateVal] = useState(3)

  return (
    <Box>
      <Typography variant='h5'>
        Example of Rating Component in MUI
      </Typography>
      <Stack
        margin={3}
      >
        <Rating
          value={rateVal}
          getLabelText={getLabelText}
          precision={0.10}
          onChange={(e, newVal)=>setRateVal(newVal)}
        >
        </Rating>
      </Stack>
      <Typography >
        The Current Rating is = {rateVal}
      </Typography>
    </Box>
  )
}

export default RatingEx