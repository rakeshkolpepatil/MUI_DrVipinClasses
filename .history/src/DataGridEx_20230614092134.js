import { Box, Typography } from '@mui/material'
import React from 'react'

const DataGridEx = () => {

  const fields = [
    {field:'sid', headerName:'Stud Id', width: 150},
    {field:'fname', headerName:'First Name', width: 150},
    {field:'lname', headerName:'Last Name', width: 150}
  ]

  return (
    <Box>
      <Typography> MUI Data Grid Example  </Typography>

    </Box>
  )
}

export default DataGridEx