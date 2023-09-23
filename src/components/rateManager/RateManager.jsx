import React, { useState } from "react";
import "./rateProfessor.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
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
import Navbar from "../navbar/Navbar";
import { useUserAuth } from "../../context/UserAuthContext";

const RateManager = () => {
  const { user } = useUserAuth();
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


  const handleWorkAgain = (event) => {
    setWorkAgain(event.target.value);
  };
  const handleProgress = (event) => {
    setProgress(event.target.value);
  };

  const handleGuidance = (event) => {
    setGuidance(event.target.value);
  };

  const handleTruthful = (event) => {
    setTruth(event.target.value);
  };

  const handleGrade = (event) => {
    setGrade(event.target.value);
  };

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
        author_id: user.uid,
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
    <>
      <Navbar showSearchBar={true} />
      <form className="rate-professor-container" onSubmit={handleSubmit}>
        <h1>Rate a manager</h1>

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
            What was the result of your annual review on a school grading
            system?
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
              rows="2"
              onChange={handleReview}
            />
          </div>
        </div>
        <div className="guidelines-cell">
          <p>
            By clicking the "Submit" button, I acknowledge that I have read and
            agreed to the following Community guidelines.
          </p>
          <p>
            <b>Purpose.</b>
             To shed some light on a company's and its management's culture,
            leadership styles, and overall work environment before a jobseeker
            even applies.
          </p>
          <br />
          <p>
            <b>Be respectful.</b>
            This means treating others with the same respect that you would want
            to be treated with. Avoid personal attacks, name-calling, and other
            forms of harassment. Remember that the people you are writing about
            are real people with feelings. Even if you had a negative
            experience, try to be respectful of the manager and co-worker.
            Remember that everyone is entitled to their own opinion. Just
            because you didn't like a manager or the company doesn't mean no one
            else will.
          </p>
          <br />
          <p>
            <b>Be honest.</b> Only post reviews based on your personal
            experience; do not post false or misleading information. If you had
            a bad experience, that's fine, but be sure to explain why you had a
            bad experience. Don't just say that the manager, co-worker, and/or
            company was "bad" without giving any specific reasons.
          </p>
          <br />
          <p>
            <b>Be specific.</b> When you write a review, be as specific as
            possible. What did you like or dislike about the manager, co-worker,
            and/or company? What were the manager, co-worker, and/or company
            methods? What was the workload like? The more specific you are, the
            more helpful your review will be to others. Don't just say that the
            manager, co-worker, and/or company was "good" or "bad." Give
            specific examples to support your claims. For example, if you
            thought the manager, co-worker, and/or company were effective, you
            could mention what was so effective.
          </p>
          <br />
          <p>
            <b>Be objective.</b> Try to be as objective as possible in your
            reviews. Avoid letting your personal feelings about the manager,
            co-worker, and/or company cloud your judgment. Remember that others
            may have different preferences than you do what you didn't like
            about a manager, co-worker, and/or company someone else might love.
          </p>
          <br />
          <p>
            <b>Be helpful.</b> The goal of Ratemyo.com is to help others
            (co-workers and employees) make informed decisions about their next
            job or career move. When you write a review, try to be as helpful as
            possible. Share your experiences and insights so that others can
            benefit from your knowledge.
          </p>
          <br />
          <p>
            <b>Describe your experience.</b> What did you like or dislike about
            the manager, co-worker, and/or company? The more details you can
            provide, the more helpful your review will be.
          </p>
          <br />
          <div className="inner-rate-cell">
            <button
              style={{
                padding: "0.5rem",
                borderRadius: "10px",
                cursor: "pointer",
                background: "gold",
              }}
            >
              Submit Rating
            </button>
            {/* <Button variant="outlined">Submit Rating</Button> */}
          </div>
        </div>
      </form>
    </>
  );
};

export default RateManager;
