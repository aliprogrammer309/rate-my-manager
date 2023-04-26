import React, { useState } from "react";
import "./rateSchool.css";
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
  TextField,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

const RateCompany = () => {
  //   const [rating, setRating] = useState(0);
  const [reputation, setReputation] = useState(0);
  const [location, setLocation] = useState(0);
  const [opportunities, setOpportunities] = useState(0);
  const [facilities, setFacilities] = useState(0);
  const [internet, setInternet] = useState(0);
  const [food, setFood] = useState(0);
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
        food: food,
        clubs: clubs,
        social: social,
        happiness: happiness,
        safety: safety,
        review: review,
        id: id,
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
        <b>Food</b>
        <div className="inner-rate-cell">
          <Box
            sx={{
              "& > legend": { mt: 2 },
            }}
          >
            <Rating
              name="simple-controlled"
              size="large"
              value={food}
              onChange={(event, newValue) => {
                setFood(newValue);
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
          <Box
            sx={
              {
                // "& > legend": { mt: 2 },
                // width: 500,
                // maxWidth: "100%",
              }
            }
          >
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
            type="submit"
          >
            Submit Rating
          </button>
        </div>
      </div>
    </form>
  );
};

export default RateCompany;
