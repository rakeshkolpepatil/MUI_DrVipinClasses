import { LoadingButton } from '@mui/lab'
import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import SaveIcon from '@mui/icons-material/Save';

const LoadingButtonEx = () => {
  const [load, setLoad] = useState(false)
  const handleClick = () => {
    setLoad(!load)
  }

  useEffect( ()=>{
    const timer = setInterval( ()=> setLoad(false), 4000)
    return ()=>{
      clearInterval(timer)
    }
  }
  , [])

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