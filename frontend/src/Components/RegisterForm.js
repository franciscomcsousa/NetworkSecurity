// import React from 'react';

// export const RegisterForm = ({ userInput, onFormChange, onFormSubmit }) => {

//     const handleChange = (event) => {
//         onFormChange(event.target.value)
//     }

//     const handleSubmit = (event) => {
//         event.preventDefault()
//         onFormSubmit()
//     }
/*
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={userInput} onChange={handleChange} required/>
            <input type="submit"></input>
        </form>
        </>
    )
}


    const handleSubmit = (event) => {
        event.preventDefault()
        handleFormSubmit()
    }

    */
    // return (
    //     <form onSubmit={handleSubmit}>
    //     <label htmlFor="name">Name</label>
    //     <input
    //         type="text"
    //         name="name"
    //         id="name"
    //         value={userInput.name}
    //         onChange={handleChange}
    //     />
    //     <label htmlFor="email">Email</label>
    //     <input
    //         type="email"
    //         name="email"
    //         id="email"
    //         value={userInput.email}
    //         onChange={handleChange}
    //     />
    //     <label htmlFor="password">Password</label>
    //     <input
    //         type="password"
    //         name="password"
    //         id="password"
    //         value={userInput.password}
    //         onChange={handleChange}
    //     />
    //     <input type="submit"></input>
    //     </form>
    //     )
    // }




    

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://localhost:3000/">
          The Cork
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const theme = createTheme();

export default function RegisterForm({ nameInput, emailInput, passwordInput, onFormChangeName, onFormChangeEmail, onFormChangePassword, onFormSubmit }) {
  
    const handleChangeName = (event) => {
       onFormChangeName(event.target.value)
    }

    const handleChangeEmail = (event) => {
        onFormChangeEmail(event.target.value)
    }

    const handleChangePassword = (event) => {
        onFormChangePassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onFormSubmit()
    }


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="name"
                  type="text"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  autoFocus
                  value={nameInput}
                  onChange={handleChangeName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={emailInput}
                  onChange={handleChangeEmail}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={passwordInput}
                  onChange={handleChangePassword}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}