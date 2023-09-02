import { useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import {
  fetchSignInMethodsForEmail,
  getAuth,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth, db } from "../../firebase";
import { Alert, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState("");
  const [ansError, setAnsError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showAnswerField, setShowAnswerField] = useState(false);
  const navigate = useNavigate();

  const handleEmailSubmit = async () => {
    const user = await fetchSignInMethodsForEmail(auth, email);

    if (user.length > 0) {
      // If the user exists in Firebase Auth
      const userDoc = await getDoc(doc(db, "users", email)); // Assuming email is used as the document ID
      if (userDoc.exists()) {
        setQuestion(userDoc.data().securityQuestion);
        setShowAnswerField(true);
        setEmailError("");
      } else {
        setEmailError("No associated security question found.");
        // Display error to the user
      }
    } else {
      setEmailError("Email is not registered.");
      // Display error to the user
    }
  };

  const handleSecurityAnswerSubmit = async () => {
    const userDoc = await getDoc(doc(db, "users", email));
    if (userDoc.exists()) {
      const correctAnswer = userDoc.data().answer;
      if (answer === correctAnswer) {
        // Allow password reset using Firebase's built-in method
        const auth = getAuth();
        try {
          await sendPasswordResetEmail(auth, email);
          alert("Password reset email sent!");
          setAnsError("");
          navigate("/");
          // Notify the user or navigate to another page
        } catch (error) {
          setAnsError(error.message);
          //   alert("Error sending password reset email:", error.message);
          // Display error to the user
        }
      } else {
        setAnsError("Incorrect answer.");
        // alert("Incorrect answer.");
        // Display error to the user
      }
    }
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          margin: "15% auto",
          gap: "10px",
        }}
      >
        {emailError && <Alert severity="error">{emailError}</Alert>}

        {!showAnswerField ? (
          <>
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleEmailSubmit}
            >
              Submit
            </Button>
          </>
        ) : (
          <>
            {ansError && <Alert severity="error">{ansError}</Alert>}

            <p>{question}</p>
            <TextField
              label="Answer"
              fullWidth
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSecurityAnswerSubmit}
            >
              Confirm Answer
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default ForgetPassword;
