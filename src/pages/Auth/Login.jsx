import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Divider,
  Box,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {
    logIn,
    googleSignIn,
    facebookSignIn,
    twitterSignIn,
    MicrosoftSignIn,
  } = useUserAuth();
  const navigate = useNavigate();

  //email and password login
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setError("");
  //   try {
  //     await logIn(email, password);
  //     navigate(-1);
  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

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

  //login with twitter
  const handleTwitterSignIn = async (e) => {
    e.preventDefault();
    try {
      await twitterSignIn();
      navigate(-2);
    } catch (error) {
      console.log(error.message);
    }
  };

  //login with twitter
  const handleMicrosoftSignIn = async (e) => {
    e.preventDefault();
    try {
      await MicrosoftSignIn();
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
          <Typography variant="h5" align="center">
            Sign in
          </Typography>
          <Typography  sx={{fontStyle: 'italic'}} align="center">
            Perform Any Action To Continue
          </Typography>
          <Divider />

          <Container maxWidth="sm">
            <Box py={2}>
              <Grid
                container
                spacing={2}
                direction="column"
                alignItems="center"
              >
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    startIcon={<GoogleIcon />}
                    style={{
                      minWidth: "250px",
                      borderColor: "#DB4437",
                      color: "#DB4437",
                    }}
                    onClick={handleGoogleSignIn}
                  >
                    Sign in with Google
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    startIcon={<FacebookIcon />}
                    style={{
                      minWidth: "250px",
                      borderColor: "#1877F2",
                      color: "#1877F2",
                    }}
                    onClick={handleFacebookSignIn}
                  >
                    Sign in with Facebook
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    startIcon={<TwitterIcon />}
                    style={{
                      minWidth: "250px",
                      borderColor: "#1DA1F2",
                      color: "#1DA1F2",
                    }}
                    onClick={handleTwitterSignIn}
                  >
                    Sign in with Twitter
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="primary"
                    startIcon={<MicrosoftIcon />}
                    style={{
                      minWidth: "250px",
                      borderColor: "#5E5E5E",
                      color: "#5E5E5E",
                    }}
                    onClick={handleMicrosoftSignIn}
                  >
                    Sign in with Microsoft
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Paper>
      </Container>
    </>
  );
}

export default Login;
