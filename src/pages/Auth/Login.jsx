import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  Grid,
  Typography,
  Paper,
  Divider,
  Stack,
  Alert,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Navbar from "../../components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn, facebookSignIn, twitterSignIn } = useUserAuth();
  const navigate = useNavigate();

  //email and password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate(-1);
    } catch (err) {
      setError(err.message);
    }
  };

  //login with google
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate(-2);
    } catch (error) {
      console.log(error.message);
    }
  };

  //login with facebook
  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate(-2);
    } catch (error) {
      console.log(error.message);
    }
  };

    //login with facebook
    const handleTwitterSignIn = async (e) => {
      e.preventDefault();
      try {
        await twitterSignIn();
        navigate(-2);
      } catch (error) {
        console.log(error.message);
      }
    };
  
  return (
    <>
      <Navbar showSearchBar={true} />
      <Container component="main" style={{ marginTop: "90px" }} maxWidth="xs">
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography component="h1" variant="h5" align="center">
            Sign in
          </Typography>
          {error && <Alert severity="error">{error}</Alert>}
          <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              style={{ marginTop: "10px" }}
            >
              Sign In
            </Button>
            <Stack
              style={{ marginTop: "15px" }}
              spacing={{ xs: 1, sm: 2, lg: 4 }}
              direction="row"
              useFlexGap
            >
              <Link to="/forgetPassword">
                <Button size="small">Forgot Password</Button>
              </Link>
              <Link to="/signup">
                <Button size="small">Create New Account</Button>
              </Link>
            </Stack>
            <Grid container style={{ marginTop: "20px" }}>
              <Grid item xs>
                <Divider textAlign="center">Or Continue With</Divider>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={1}
              justifyContent="center"
              style={{ marginTop: "20px" }}
            >
              <Grid item>
                <Button
                  startIcon={<GoogleIcon style={{ margin: "0px" }} />}
                  variant="outlined"
                  onClick={handleGoogleSignIn}
                />
              </Grid>

              <Grid item>
                <Button
                  startIcon={<FacebookIcon />}
                  variant="outlined"
                  onClick={handleFacebookSignIn}
                />
              </Grid>

              <Grid item>
                <Button
                  startIcon={<TwitterIcon />}
                  variant="outlined"
                  onClick={handleTwitterSignIn}
                />
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
}

export default Login;
