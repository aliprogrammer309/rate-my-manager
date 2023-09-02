import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  Grid,
  Typography,
  Paper,
  MenuItem,
  Alert,
} from "@mui/material";
import Navbar from "../../components/navbar/Navbar";
import { db } from "../../firebase";
import { useUserAuth } from "../../context/UserAuthContext";
import { doc, setDoc } from "firebase/firestore";

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    securityQuestion: "",
    answer: "",
  });

  const [errors, setErrors] = useState({});
  const [error1, setError1] = useState("");

  const securityQuestions = [
    "What was the name of your first pet?",
    "What was your childhood nickname?",
    "In what city did you meet your spouse/significant other?",
    "What is the name of your favorite childhood friend?",
    "What street did you live on in third grade?",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let tempErrors = {};

    // Check for empty fields
    Object.keys(formData).forEach((key) => {
      if (!formData[key] || formData[key].trim() === "") {
        tempErrors[key] = "This field is required";
      }
    });

    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (formData.email && !emailPattern.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0; // If no errors, return true
  };

  const { signUp } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        // 1. Sign Up the user
        const userCredential = await signUp(formData.email, formData.password);
        const user = userCredential.user;
        console.log(user);

        // 2. Save user data to Firestore
        await setDoc(doc(db, "users", formData.email), {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          securityQuestion: formData.securityQuestion,
          answer: formData.answer,
          // Add any other fields you want to save, for example:
          // profileImage: defaultImageURL,
          // joinedDate: serverTimestamp(), (you'd need to import serverTimestamp from 'firebase/firestore' for this)
        });
        alert("User registered successfully!");
        
      } catch (error) {
        setError1(error.message);
        // console.log("Error during the sign-up:", error.message);
        // Handle errors here, e.g., display an error message to the user
      }
    }
  };

  return (
    <>
      <Navbar showSearchBar={true} />
      <Container component="main" style={{ marginTop: "90px" }} maxWidth="md">
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <Typography component="h1" variant="h5" align="center">
            Sign Up
          </Typography>
          {error1 && <Alert severity="error">{error1}</Alert>}
          <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="firstName"
                  label="First Name"
                  variant="outlined"
                  required
                  fullWidth
                  value={formData.firstName}
                  onChange={handleChange}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  label="Last Name"
                  variant="outlined"
                  required
                  fullWidth
                  value={formData.lastName}
                  onChange={handleChange}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  required
                  fullWidth
                  value={formData.password}
                  onChange={handleChange}
                  error={!!errors.password}
                  helperText={errors.password}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  required
                  fullWidth
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="securityQuestion"
                  select
                  label="Security Question"
                  variant="outlined"
                  required
                  fullWidth
                  value={formData.securityQuestion}
                  onChange={handleChange}
                >
                  {securityQuestions.map((question, index) => (
                    <MenuItem key={index} value={question}>
                      {question}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="answer"
                  label="Answer"
                  variant="outlined"
                  required
                  fullWidth
                  value={formData.answer}
                  onChange={handleChange}
                  error={!!errors.answer}
                  helperText={errors.answer}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </>
  );
}

export default SignUp;
