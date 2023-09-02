import React, { useState } from "react";
import "../rateManager/rateProfessor.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import {
  FormControlLabel,
  RadioGroup,
} from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const RateCoworker = () => {
  const [company, setCompany] = useState("");
  const [dependable, setDependable] = useState(0);
  const [trustworthiness, setTrustworthiness] = useState(0);
  const [decisionMaking, setDecisionMaking] = useState(0);
  const [competency, setCompetency] = useState(0);
  const [dedication, setDedication] = useState(0);
  const [communication, setCommunication] = useState(0);
  const [withOthers, setWithOthers] = React.useState("");
  const [review, setReview] = React.useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const id = location.state;


  const handleWithOthers = (event) => {
    setWithOthers(event.target.value);
  };

  const handleReview = (event) => {
    setReview(event.target.value);
  };
  console.log(review);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "CoworkerRatings"), {
        company: company,
        dependable: dependable,
        trustworthiness: trustworthiness,
        decisionMaking: decisionMaking,
        competency: competency,
        dedication: dedication,
        communication: communication,
        withOthers: withOthers,
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
    <>
      <Navbar showSearchBar={true} />
      <form className="rate-professor-container" onSubmit={handleSubmit}>
        <h1>Rate a coworker</h1>

        <div className="rate-cell">
          <b>Please enter company where you worked with this coworker</b>
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
          <b>How dependable is he/she?</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={dependable}
                onChange={(event, newValue) => {
                  setDependable(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>How would you rate him/her on trustworthiness?</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={trustworthiness}
                onChange={(event, newValue) => {
                  setTrustworthiness(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>Does he/she get along well with others?</b>
          <div className="inner-rate-cell">
            <RadioGroup
              row
              aria-labelledby="demo-form-control-label-placement"
              name="position"
              required
              onChange={handleWithOthers}
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
          <b>How would you rate his/her decision-making skills?</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={decisionMaking}
                onChange={(event, newValue) => {
                  setDecisionMaking(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>How would you rate his/her competency?</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={competency}
                onChange={(event, newValue) => {
                  setCompetency(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>How dedicated is he/she to his/her work?</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={dedication}
                onChange={(event, newValue) => {
                  setDedication(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>How effective are his/her communication skills?</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={communication}
                onChange={(event, newValue) => {
                  setCommunication(newValue);
                }}
              />
            </Box>
          </div>
        </div>

        <div className="rate-cell">
          <b>Write a Review</b>
          <div className="inner-rate-cell">
            <textarea
              name="review"
              id=""
              placeholder="Your thoughts on this coworker?"
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
          </div>
        </div>
      </form>
    </>
  );
};

export default RateCoworker;
