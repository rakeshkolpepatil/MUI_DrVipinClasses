import { Box, Pagination, Typography } from '@mui/material'
import React from 'react'

const PaginationEx = () => {
  return (
    <Box>
      <Typography variant='h3'> MUI Pagination Example </Typography>
      <Pagination
        count={10}
      > </Pagination>
    </Box>

  )
}

export default PaginationEx