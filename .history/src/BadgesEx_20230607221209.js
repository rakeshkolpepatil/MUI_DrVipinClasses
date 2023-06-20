import { Badge, Box, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import MarkunreadTwoToneIcon from '@mui/icons-material/MarkunreadTwoTone';

const BadgesEx = () => {

  const [badgeVal, setBadgeVal] = useState(0)

  return (
    <Box >
      <Typography variant='h4'> MUI Badges Example </Typography>
      <Box m={5}>
        <Stack spacing={2} direction={'row'}>

            <TextField
              id=""
              label="Enter badge value"
              value={badgeVal}
              onChange={(event)=>setBadgeVal(event.target.value)}
            />

            <IconButton 
              // size='large' 
              // sx={{width:100, fontSize: 60, height:100}}
              // sx={{ fontSize: 200}}
              // style={{ 
              //   '& svg': {fontSize: 200}
              // }}
            >
              <Badge 
                badgeContent={badgeVal }
                style={{ transform : "scale(1)" }} 
                color='secondary' 
                // sx={{ margin:'2rem' }}
              >
                <MarkunreadTwoToneIcon 
                  // size='large' 

                  // Following solution of increasing icon size is working fine.
                  sx={{ 
                    fontSize: 50,
                  }}
                  // style={{
                  // }}
                  transform= "scale(1)"
                  
                  // Following 'style' way of increasing the icon size is not working.
                  // style={{ 
                  //   '& svg': {fontSize: 300}
                  // }}
                />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge 
                badgeContent={badgeVal }
                style={{ transform : "scale(1)" }} 
                color='secondary' 
                showZero={false}
              >
                <MarkunreadTwoToneIcon 
                  sx={{ fontSize: 50 }}
                  transform= "scale(1)"
                />
              </Badge>
            </IconButton>

            <IconButton>
              <Badge 
                badgeContent={badgeVal }
                style={{ transform : "scale(1)" }} 
                color='secondary' 
                showZero={false}
                invisible={!badgeVal}
              >
                <MarkunreadTwoToneIcon 
                  sx={{ fontSize: 50 }}
                  transform= "scale(1)"
                />
              </Badge>
            </IconButton>

            <Badge 
                badgeContent={badgeVal }
                style={{ transform : "scale(1)" }} 
                color='secondary' 
                showZero={false}
                invisible={!badgeVal}
              >
                Unread Mails
              </Badge>
        </Stack>
      </Box>
    </Box>
  )
}

export default BadgesEx