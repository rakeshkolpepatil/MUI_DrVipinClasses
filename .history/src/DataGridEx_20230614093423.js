import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

const DataGridEx = () => {

  const fields = [
    {field:'sid', headerName:'Stud Id', width: 100},
    {field:'fname', headerName:'First Name', width: 150},
    {field:'lname', headerName:'Last Name', width: 100},
  ]

  const rows = [
    { id:0, sid:1, fname:'Rakesh', lname:'Patil'},
    { id:1, sid:2, fname:'Vishwesh', lname:'Rane'},
    { id:2, sid:3, fname:'Rajesh', lname:'Mane'},
    { id:3, sid:4, fname:'Devesh', lname:'Shahane'}
  ]
  return (
    <Box
      width={800}
      mx='auto'
    >
      <Typography variant='h3'> MUI Data Grid Example  </Typography>
        <Box
          // mx={20}
          mx='auto'
          mt={5}
          sx={{ height:'400'}}
        >
          <DataGrid rows={rows} columns={fields}/>
        </Box>
    </Box>
  )
}

export default DataGridEx