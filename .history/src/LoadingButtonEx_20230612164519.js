import { LoadingButton } from '@mui/lab'
import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const LoadingButtonEx = () => {
  const [load, setLoad] = useState(false)
  const handleClick = () => {
    setLoad(!load)
  }
  useEffect( ()=>{setInterval(setLoad(true), 1000)}, [])

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