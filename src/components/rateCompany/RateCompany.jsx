import React, { useState } from "react";
import "./rateSchool.css";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import {
  TextField,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";
import Navbar from "../navbar/Navbar";
import { useUserAuth } from "../../context/UserAuthContext";

const RateCompany = () => {
  const { user } = useUserAuth();
  const [reputation, setReputation] = useState(0);
  const [location, setLocation] = useState(0);
  const [opportunities, setOpportunities] = useState(0);
  const [facilities, setFacilities] = useState(0);
  const [internet, setInternet] = useState(0);
  const [management, setManagement] = useState(0);
  const [clubs, setClubs] = useState(0);
  const [social, setSocial] = useState(0);
  const [happiness, setHappiness] = useState(0);
  const [safety, setSafety] = useState(0);
  const [review, setReview] = useState("");

  const locationn = useLocation();
  const id = locationn.state;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "CompanyRatings"), {
        reputation: reputation,
        location: location,
        opportunities: opportunities,
        facilities: facilities,
        internet: internet,
        management: management,
        clubs: clubs,
        social: social,
        happiness: happiness,
        safety: safety,
        review: review,
        id: id,
        author_id: user.uid,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
      alert("Successfully rated");
      navigate("/searchCompany");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar showSearchBar={true} />

      <form className="rate-school-container" onSubmit={handleSubmit}>
        <h1>Rate the Company</h1>
        <div className="rate-cell">
          <b>Reputation</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={reputation}
                onChange={(event, newValue) => {
                  setReputation(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>Location</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={location}
                onChange={(event, newValue) => {
                  setLocation(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>Opportunities</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={opportunities}
                onChange={(event, newValue) => {
                  setOpportunities(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>Facilities and common areas</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={facilities}
                onChange={(event, newValue) => {
                  setFacilities(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>Internet</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={internet}
                onChange={(event, newValue) => {
                  setInternet(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>Management</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={management}
                onChange={(event, newValue) => {
                  setManagement(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>Clubs</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={clubs}
                onChange={(event, newValue) => {
                  setClubs(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>Social</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={social}
                onChange={(event, newValue) => {
                  setSocial(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>Happiness</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={happiness}
                onChange={(event, newValue) => {
                  setHappiness(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>Safety</b>
          <div className="inner-rate-cell">
            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Rating
                name="simple-controlled"
                size="large"
                value={safety}
                onChange={(event, newValue) => {
                  setSafety(newValue);
                }}
              />
            </Box>
          </div>
        </div>
        <div className="rate-cell">
          <b>Review</b>
          <div className="inner-rate-cell">
            <Box>
              <TextField
                id="outlined-multiline-static"
                sx={{ width: 500, maxWidth: "100%" }}
                // label="Multiline"
                multiline
                rows={2}
                placeholder="What do you want other student to know about this school?"
                onChange={(e) => {
                  setReview(e.target.value);
                }}
              />
            </Box>
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

export default RateCompany;
