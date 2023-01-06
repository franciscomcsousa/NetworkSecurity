import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import {useLocation} from 'react-router-dom';
import Button from '@mui/material/Button';
import { useState } from 'react';
//import { Radio } from '@mui/material';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import FormControl from '@mui/material/FormControl';
//import FormLabel from '@mui/material/FormLabel';
//import RadioGroup from '@mui/material/RadioGroup';

const theme = createTheme();

export default function Restaurant() {

const location = useLocation();
const [available, setAvailability] = useState('')
const [statusData, setStatusData] = useState('')

if (!location.state) {
    return (
        <div>
            <h1>405</h1>
            <h2>Not allowed</h2>
        </div>
    )
}

const adminData = location.state.data
const availability = available ? "Open" : "Closed"

const urlName = window.location.pathname.substring(12)


const handleAvailability = (event) => {
  event.preventDefault()
  fetch(`/restaurant/${urlName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      availability: !available,
      restaurant_name: adminData.name
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`This is an HTTP error: The status is ${response.status}`)
    }
    return response.json();
  })
  .catch(error => {
    console.log(error)
  })
  setAvailability(!available)
}

const handleReservation = (event) => {
  event.preventDefault()
  console.log(event.target.value)
  fetch(`/restaurant/${urlName}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      reservation_id: event.target.value[0],
      status: event.target.value[2]
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`This is an HTTP error: The status is ${response.status}`)
    }
    return response.json();
  }
  ).then(data => {
    //works, retrieves which reservation was updated and how
    console.log(data['reservation_id']) 
    console.log(data['reservation_status'])
    setStatusData(data)
  })
  .catch(error => {
    console.log(error)
  }
  )
}
console.log("status data",statusData)


return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="The Cork"/>
      <CssBaseline />

      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            m={1} //margin
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            paddingTop={3}
          >
          <Avatar sx={{ m: 2, bgcolor: 'blueviolet', width: 50, height: 50}}>
            <AccountCircleIcon />
          </Avatar>
          </Box>
          <Box
            paddingBottom={1}
          >
          <Typography component="h1" variant="h5">
            Welcome Restaurant {adminData.name}!
          </Typography>
          </Box>
        </Box>
        <Button
          type="submit"
          onClick={handleAvailability}
          variant="contained"
          sx={{ height: 40, width: 200}}
          >
          Change availability
        </Button>
            <Grid container spacing={2}>
              
                <Grid item xs={12}>
                    {/* TODO: beautify, or just make it more readable */}
                    <Typography sx={{ p: 2 }}>Name:{adminData.name}</Typography>
                    <Typography sx={{ p: 2 }}>Address:{adminData.address} </Typography>
                    <Typography sx={{ p: 2 }}>Phone:{adminData.phone} </Typography>
                    <Typography sx={{ p: 2 }}>Email:{adminData.email} </Typography>
                    <Typography sx={{ p: 2 }}>Available Seats:{adminData.available_seats} </Typography>
                    <Typography sx={{ p: 2 }}>Availability: {availability} </Typography>
                    <Typography sx={{ p: 2 }} component={'div'}>Current Reservations:{adminData.reservations.map( (reservation) =>
                     
                     <li key={reservation}> 
                      UserEmail: {reservation[1]} 
                      How many people:{reservation[2]}
                      Status: {reservation[3] === 1 ? "Accepted! " : "Pending... "}

                      <Button type="submit" value={[reservation[0], 1]} onClick={handleReservation} variant="contained" color="success" sx={{ height: 20, width: 50, ml: 2}}> 
                      Accept </Button>
                      <Button type="submit" value={[reservation[0], 0]} onClick={handleReservation} variant="outlined" color="error" sx={{ height: 20, width: 50, ml: 2}}> 
                      Deny </Button>
                      
                      {/* return reservation_id, and 1 for accept, 0 for deny*/}
                      {/* <FormControl component={'div'}>
                        <FormLabel id="reservation-status">Respond to your client!</FormLabel>
                        <RadioGroup
                          aria-labelledby="reservation-status"
                          defaultValue=""
                          name="radio-buttons-group"
                          onChange={handleReservation}
                        >
                          <FormControlLabel control={<Radio value={[reservation[0],1]} color="success"/>}label="Accept!"/>
                          <FormControlLabel control={<Radio value={[reservation[0],0]} color="error"/>}label="Deny."/>
                        </RadioGroup>
                      </FormControl> */}
                      </li>
              
                      )}
                    </Typography>                       
                    
                </Grid>
            </Grid>
        </Container>
    </Container>
</ThemeProvider>
    );
}