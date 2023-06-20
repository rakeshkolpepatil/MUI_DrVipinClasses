import { Box, Rating, Typography } from '@mui/material'
import React, { useState } from 'react'

const RatingEx = () => {

  const [rateVal, setRateVal] = useState(3)

  return (
    <Box>
      <Typography variant='h5'>
        Example of Rating Component in MUI
      </Typography>
      <Box 
        margin={3}
        display='flex'
        flexDirection={'column'}
      >
        <Rating
          value={rateVal}
          precision={0.10}
          onChange={(e)=>setRateVal(e.target.value)}
        >
        </Rating>
      </Box>
        <Typography style={{ml: '0'}} >
          The Current Rating is = {rateVal}
        </Typography>

    </Box>
  )
}

export default RatingEx