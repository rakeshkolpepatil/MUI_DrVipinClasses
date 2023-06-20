import { LoadingButton } from '@mui/lab'
import { Typography } from '@mui/material'
import React, { useState } from 'react'

const LoadingButtonEx = () => {
  const [load, setLoad] = useState(false)
  const handleClick = () => {
    setLoad(!load)
  }
  return (
    <>
      <Typography variant='h5' >
        MUI Loading Button Example
      </Typography>
      <LoadingButton
        sx={{ mt:'2rem' }}
        variant='contained' 
        loadingIndicator="Loading..."
        loading={load}
        onClick={handleClick}
      >
        Submit 
      </LoadingButton>
    </>
  )
}

export default LoadingButtonEx