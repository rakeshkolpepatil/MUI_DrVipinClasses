import { Box, Pagination, Typography } from '@mui/material'
import React, { useState } from 'react'

const PaginationEx = () => {

  const [activePage, setActivePage] = useState()

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
          page={activePage}
          onChange={(event, newPage)=>setActivePage(newPage)}
          // shape='rounded'
          color='secondary'
          siblingCount={1}
          boundaryCount={0}
          variant='outlined'
          showFirstButton
          showLastButton
          // hideNextButton
          // hidePrevButton
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
        Page - {activePage}
    </Box>

  )
}

export default PaginationEx