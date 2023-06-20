import { Box, Rating, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const RatingEx = () => {

  const [rateValLg, setRateValLg] = useState(3)
  const [rateValMd, setRateValMd] = useState(3)
  const [rateValSm, setRateValSm] = useState(3)

  return (
    <Box>
      <Typography variant='h5'>
        Example of Rating Component in MUI
      </Typography>
      <Stack
        margin={3}
        spacing={1}
        direction={'column'}
        useFlexGap
        alignItems={'flex-start'}
      >
        <Rating
          value={rateValLg}
          precision={0.10}
          onChange={(e, newVal)=>setRateValLg(newVal)}
          // size='small'
          size='large'
        />
        <Typography> The Current Rating is = {rateValLg} </Typography>

        <Rating
          value={rateValMd}
          precision={0.10}
          onChange={(e, newVal)=>setRateValMd(newVal)}
          // size='small'
          size='medium'
        />
        <Typography> The Current Rating is = {rateValMd} </Typography>

        <Rating
          value={rateValSm}
          precision={0.10}
          onChange={(e, newVal)=>setRateValSm(newVal)}
          // size='small'
          size='small'
          max={10}
        />
        <Typography variant='body2'> The Current Rating is = {rateValSm} </Typography>

      </Stack>
    </Box>
  )
}

export default RatingEx