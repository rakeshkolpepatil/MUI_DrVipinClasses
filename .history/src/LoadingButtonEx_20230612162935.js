import { LoadingButton } from '@mui/lab'
import { Typography } from '@mui/material'
import React from 'react'

const LoadingButtonEx = () => {
  return (
    <>
      <Typography variant='h5' >
        MUI Loading Button Example
      </Typography>
      <LoadingButton 
        variant='contained' 
        loading={false}
      > Submit </LoadingButton>
    </>
  )
}

export default LoadingButtonEx