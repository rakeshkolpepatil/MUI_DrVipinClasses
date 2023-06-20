import { Box, Rating, Stack, Typography } from '@mui/material'
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';


const RatingEx = () => {

  const [rateValLg, setRateValLg] = useState(3)
  const [rateValMd, setRateValMd] = useState(3)
  const [rateValSm, setRateValSm] = useState(3)
  const [rateValHigh, setRateValHigh] = useState(2)

  const params = useParams()
  const [paramStar, setParamStar] = useState()
  
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
        <Typography variant='body1'> The Current Rating is = {rateValMd} </Typography>

        <Rating
          value={rateValSm}
          precision={0.10}
          onChange={(e, newVal)=>setRateValSm(newVal)}
          // size='small'
          size='small'
          max={10}
        />
        <Typography variant='subtitle2'> The Current Rating is = {rateValSm} </Typography>

        <Rating
          value={rateValSm}
          precision={0.10}
          onChange={(e, newVal)=>setRateValSm(newVal)}
          // size='small'
          size='small'
          max={10}
          readOnly
        />
        <Typography variant='subtitle2'> The Current Rating is = {rateValSm} </Typography>

        <Rating
          value={rateValSm}
          precision={0.10}
          onChange={(e, newVal)=>setRateValSm(newVal)}
          // size='small'
          size='small'
          max={10}
          disabled
        />
        <Typography variant='subtitle2'> The Current Rating is = {rateValSm} </Typography>

        <Rating
          value={rateValMd}
          precision={0.10}
          onChange={(e, newVal)=>setRateValMd(newVal)}
          icon={<EmojiEmotionsIcon color='success'/>}
          emptyIcon={<SentimentVerySatisfiedIcon color='success'/>}
          // size='small'
          size='medium'
        />
        <Typography variant='body1'> The Current Rating is = {rateValMd} </Typography>

        <Rating
          value={rateValHigh}
          precision={0.10}
          onChange={(e, newVal)=>setRateValHigh(newVal)}
          icon={<EmojiEmotionsIcon color='success'/>}
          emptyIcon={<SentimentVerySatisfiedIcon color='success'/>}
          // size='small'
          size='medium'
          highlightSelectedOnly
        />
        <Typography variant='body1'> The Current Rating is = {rateValMd} </Typography>

      </Stack>
    </Box>
  )
}

export default RatingEx