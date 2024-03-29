import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from 'react-router-dom'


const theme = createTheme();

export default function RegisterForm({ nameInput, emailInput, passwordInput, onFormChangeName, onFormChangeEmail, onFormChangePassword, onFormSubmit }) {
    const navigate = useNavigate();
  
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

    let re = /\S+@\S+\.\S+/;

    const validate = () => {
      return re.test(emailInput) && passwordInput.length > 0 && nameInput.length > 0;
    };

  return (
    <ThemeProvider theme={theme}>
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
            paddingTop={1}
          >
          <Button size="large" variant="text" color="inherit" onClick={() => navigate('/', {replace: true})}>The Cork</Button>
          </Box>
          <Box
            m={1} //margin
            paddingTop={1}
            paddingBottom={1}
          >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          </Box>
          <Typography component="h1" variant="h5">
            Register now to receive a bonus of 50€ in your account!
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
              disabled={!validate()}
            >
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Box
                  sx={{ mt: -4 }}
                >
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}