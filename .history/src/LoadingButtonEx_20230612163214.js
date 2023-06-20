import { LoadingButton } from '@mui/lab'
import { Typography } from '@mui/material'
import React, { useState } from 'react'

const LoadingButtonEx = () => {
  const [load, setLoad] = useState()

  return (
    <>
      <Typography variant='h5' >
        MUI Loading Button Example
      </Typography>
      <LoadingButton
        sx={{ mt:'2rem' }}
        variant='contained' 
        loading={false}
      > Submit </LoadingButton>
    </>
  )
}

export default LoadingButtonEx