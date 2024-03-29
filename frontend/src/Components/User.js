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

const theme = createTheme();

export default function User() {

const location = useLocation();

if (!location.state) {
    return (
        <div>
            <h1>405</h1>
            <h2>Not allowed</h2>
        </div>
    )
}

const userData = location.state.data

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
            Welcome {userData.name}!
          </Typography>
          </Box>
        </Box>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography sx={{ p: 2 }}>Name:{userData.name}</Typography>
                    <Typography sx={{ p: 2 }}>Email:{userData.email} </Typography>
                    <Typography sx={{ p: 2 }}>Wallet:{userData.wallet}€ </Typography>
                    <Typography sx={{ p: 2 }} component={'div'}>Created Cards:{userData.sent_cards.map( (card) =>
                      <li key={card}> CardNumber: {card[0]}, Amount: {card[1]}€, Redeemed by: {card[2]}</li>
                      )}
                    </Typography>
                    <Typography sx={{ p: 2 }} component={'div'}>Redeemed Cards:{userData.redeemed_cards.map( (card) =>
                      <li key={card}> CardNumber: {card[0]}, Amount: {card[1]}€, Sent by: {card[2]}</li>
                      )}
                    </Typography>
                    <Typography sx={{ p: 2 }} component={'div'}>Reservations:{userData.reservations.map( (reservation) =>
                      <li key={reservation}> Restaurant Name: {reservation[0]}, How many people: {reservation[1]}, Status: {reservation[2] === 1 ? "Accepted!" : "Pending..."}</li>
                      )}
                    </Typography>
                        
                </Grid>
            </Grid>
        </Container>
    </Container>
</ThemeProvider>
    );
}