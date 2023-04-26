import React, { useState } from "react";
import "./rateProfessor.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
// import { pink } from "@mui/material/colors";
import Radio from "@mui/material/Radio";
import {
  FormControlLabel,
  InputLabel,
  MenuItem,
  RadioGroup,
  Select,
} from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";

const RateManager = () => {
  const [company, setCompany] = useState("");
  const [rating, setRating] = useState(0);
  const [difficulty, setDifficulty] = useState(0);
  const [workAgain, setWorkAgain] = React.useState("");
  const [progress, setProgress] = React.useState("");
  const [guidance, setGuidance] = React.useState("");
  const [truth, setTruth] = React.useState("");
  const [grade, setGrade] = React.useState("A+");
  const [review, setReview] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state;

  // const [validation, setValidation] = React.useState(true);

  const handleWorkAgain = (event) => {
    setWorkAgain(event.target.value);
  };
  // console.log(takeAgain);
  const handleProgress = (event) => {
    setProgress(event.target.value);
  };
  // console.log(takenForCredit);

  const handleGuidance = (event) => {
    setGuidance(event.target.value);
  };
  // console.log(useTextBook);

  const handleTruthful = (event) => {
    setTruth(event.target.value);
  };
  // console.log(attendance);

  const handleGrade = (event) => {
    setGrade(event.target.value);
  };
  // console.log(grade);

  const handleReview = (event) => {
    setReview(event.target.value);
  };
  console.log(review);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "ManagerRatings"), {
        company: company,
        rating: rating,
        difficulty: difficulty,
        workAgain: workAgain,
        progress: progress,
        guidance: guidance,
        truth: truth,
        grade: grade,
        review: review,
        id: id,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Successfully rated");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="rate-professor-container" onSubmit={handleSubmit}>
      <h1>Rate the manager</h1>

      <div className="rate-cell">
        <b>Please enter company where you worked with this manager</b>
        <div className="inner-rate-cell">
          <input
            type="text"
            required
            placeholder="Company name"
            onChange={(e) => {
              setCompany(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="rate-cell">
        <b>Rate your manager</b>
        <div className="inner-rate-cell">
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              size="large"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
            />
          </Box>
        </div>
      </div>
      <div className="rate-cell">
        <b>How difficult was this manager?</b>
        <div className="inner-rate-cell">
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              size="large"
              value={difficulty}
              onChange={(event, newValue) => {
                setDifficulty(newValue);
              }}
            />
          </Box>
        </div>
      </div>
      <div className="rate-cell">
        <b>Would you work with this manager again?</b>
        <div className="inner-rate-cell">
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            required
            onChange={handleWorkAgain}
          >
            <FormControlLabel
              value="Yes"
              control={<Radio size="large" color="success" />}
              label="Yes"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="No"
              control={<Radio color="error" size="large" />}
              label="No"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </div>
      </div>
      <div className="rate-cell">
        <b>Did working with this manager progress your career?</b>
        <div className="inner-rate-cell">
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            required
            onChange={handleProgress}
          >
            <FormControlLabel
              value="Yes"
              control={<Radio size="large" color="success" />}
              label="Yes"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="No"
              control={<Radio color="error" size="large" />}
              label="No"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </div>
      </div>
      <div className="rate-cell">
        <b>Did this manager give clear instructions or guidance?</b>
        <div className="inner-rate-cell">
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            required
            onChange={handleGuidance}
          >
            <FormControlLabel
              value="Yes"
              control={<Radio size="large" color="success" />}
              label="Yes"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="No"
              control={<Radio color="error" size="large" />}
              label="No"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </div>
      </div>
      <div className="rate-cell">
        <b>Was this manager truthful?</b>
        <div className="inner-rate-cell">
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            required
            onChange={handleTruthful}
          >
            <FormControlLabel
              value="Yes"
              control={<Radio size="large" color="success" />}
              label="Yes"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="No"
              control={<Radio color="error" size="large" />}
              label="No"
              labelPlacement="bottom"
            />
          </RadioGroup>
        </div>
      </div>
      <div className="rate-cell">
        <b>
          {" "}
          What was the result of your annual review on a school grading system?
        </b>
        <div className="inner-rate-cell">
          <Box>
            <InputLabel id="demo-simple-select-label"></InputLabel>
            <Select
              sx={{ minWidth: 290 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={grade}
              label="Grade"
              onChange={handleGrade}
            >
              <MenuItem value="Outstanding">Outstanding</MenuItem>
              <MenuItem value="Satisfactory">Satisfactory</MenuItem>
              <MenuItem value="Unsatisfactory">Unsatisfactory</MenuItem>
              <MenuItem value="Rather not say">Rather not say</MenuItem>
            </Select>
          </Box>
        </div>
      </div>
      <div className="rate-cell">
        <b>Write a Review</b>
        <div className="inner-rate-cell">
          <textarea
            name="review"
            id=""
            placeholder="Your thoughts on this manager?"
            cols="40"
            required
            rows="5"
            onChange={handleReview}
          />
        </div>
      </div>
      <div className="rate-cell">
        <p style={{ textAlign: "center" }}>
          By clicking the "Submit" button, I acknowledge that I have read and
          agreed to the RateMyO
        </p>
        <div className="inner-rate-cell">
          <button
            style={{
              padding: "0.5rem",
              borderRadius: "10px",
              cursor: "pointer",
            }}
            // disabled={validation}
          >
            Submit Rating
          </button>
        </div>
      </div>
    </form>
  );
};

export default RateManager;
