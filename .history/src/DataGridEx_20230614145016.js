import { Box, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { useDemoData } from '@mui/x-data-grid-generator'
import React from 'react'
// import {useDemoData} from '@mui/x-data-grid-gene'

const DataGridEx = () => {

  const {data} = useDemoData({
    dataSet : "Commodity",
    rowLength: 10,
    maxColumns: 6
  })

  const fields = [
    {field:'sid', headerName:'Stud Id', width: 1000},
    {field:'fname', headerName:'First Name', width: 150},
    {field:'lname', headerName:'Last Name', width: 200},
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
      <Typography 
        variant='h3'
      > 
        MUI Data Grid Example  
      </Typography>

        <Box
          mx='auto'
          mt={5}
          sx={{ height:'400'}}
        >
          <DataGrid rows={rows} columns={fields}/>
        </Box>
        
        <Box
          mx='auto'
          mt={5}
          sx={{ height:'400'}}
        >
          <DataGrid {...data}/>
        </Box>

    </Box>
  )
}

export default DataGridEx