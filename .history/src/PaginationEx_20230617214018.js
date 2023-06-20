import { Box, Pagination, Typography } from '@mui/material'
import React from 'react'

const PaginationEx = () => {
  return (
    <Box>
      <Typography variant='h3'> MUI Pagination Example </Typography>
      <Box
        display='flex'
        justifyContent='center'
        mt={5}
      >
        <Pagination
          count={10}
          size='large'
          // shape='rounded'
          color='secondary'
          siblingCount={2}
          variant='outlined'
          sx={{
            // Method 1 :-
            // "Button.MuiPaginationItem-circular.Mui-selected": {
            //   backgroundColor: "#97327e",
            //   color:"#ffffff"
            // },

            // Method 2 :-
            // "& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected": {
            //   backgroundColor: "#37b347",
            //   color:"#ffffff"
            // }

            // Method 3 :-
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#97327e",
              color:"#ffffff"
            }
          }}
        > </Pagination>
      </Box>
    </Box>

  )
}

export default PaginationEx