import { Button, Rating } from "@mui/material";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import "firebase/firestore";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import clubs from "../../assets/clubs.svg";
import happiness from "../../assets/happiness.svg";
import internet from "../../assets/internet.svg";
import management from "../../assets/food.svg";
import reputation from "../../assets/reputation.svg";
import opportunities from "../../assets/opportunities.svg";
import social from "../../assets/social.svg";
import facilities from "../../assets/facilities.svg";
import Location from "../../assets/location.svg";
import safety from "../../assets/safety.svg";

import "./schoolResult.css";
import Navbar from "../navbar/Navbar";
import ReportDialog from "../ReportDialog/ReportDialog";
import { useUserAuth } from "../../context/UserAuthContext";
import ReportIcon from "@mui/icons-material/Report";

const CompanyResult = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const item = location.state;
  const [clubsAvg, setClubsAvg] = useState(0);
  const [facilitiesAvg, setFacilitiesAvg] = useState(0);
  const [managementAvg, setManagementAvg] = useState(0);
  const [happinessAvg, setHappinessAvg] = useState(0);
  const [internetAvg, setInternetAvg] = useState(0);
  const [locationAvg, setLocationAvg] = useState(0);
  const [opportunitiesAvg, setOpportunitiesAvg] = useState(0);
  const [reputationAvg, setReputationAvg] = useState(0);
  const [safetyAvg, setSafetyAvg] = useState(0);
  const [socialAvg, setSocialAvg] = useState(0);

  const [isReportDialogOpen, setReportDialogOpen] = useState(false);
  const { user } = useUserAuth();
  const reporterId = user?.uid;
  const [commentId, setCommentId] = useState("");
  const navigate = useNavigate();

  const handleReportButtonClicked = (cmtId) => {
    if (user) {
      setReportDialogOpen(true);
      setCommentId(cmtId);
    } else {
      navigate("/login");
    }
  };

  const handleReportSubmit = async (reason) => {
    console.log("Reported with reason:", reason);
    console.log("user_id: ", reporterId);

    try {
      // Reference to the specific report by a user for a comment
      const reportRef = doc(
        db,
        "reportedComments",
        commentId,
        "reports",
        reporterId
      );
      const reportSnap = await getDoc(reportRef);

      // If a report from this user for this comment exists, return
      if (reportSnap.exists()) {
        alert("You have already reported this comment.");
        return "You have already reported this comment.";
      }

      // Otherwise, create or update the report
      await setDoc(reportRef, {
        reporterId: reporterId,
        reason: reason,
        timestamp: new Date(),
      });

      alert("Comment reported successfully!");
      return "Comment reported successfully!";
    } catch (error) {
      alert("Error reporting comment:", error.message);
      return "An error occurred while reporting the comment.";
    }
  };

  React.useEffect(() => {
    const fetchData = async () => {
      let list = [];
      let happinessSum = 0;
      let internetSum = 0;
      let managementSum = 0;
      let clubSum = 0;
      let reputationSum = 0;
      let opportunitieSum = 0;
      let socialSum = 0;
      let facilitiSum = 0;
      let locationSum = 0;
      let safetySum = 0;
      let count = 0;

      try {
        const q = query(
          collection(db, "CompanyRatings"),
          where("id", "==", item.id),
          orderBy("timestamp", "desc")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          happinessSum += doc.data().happiness;
          internetSum += doc.data().internet;
          managementSum += doc.data().management;
          clubSum += doc.data().clubs;
          reputationSum += doc.data().reputation;
          opportunitieSum += doc.data().opportunities;
          socialSum += doc.data().social;
          facilitiSum += doc.data().facilities;
          locationSum += doc.data().location;
          safetySum += doc.data().safety;

          count++;
          list.push({ id: doc.id, commentId: doc.id, ...doc.data() });
        });
        setHappinessAvg(happinessSum / count);
        setInternetAvg(internetSum / count);
        setManagementAvg(managementSum / count);
        setClubsAvg(clubSum / count);
        setReputationAvg(reputationSum / count);
        setOpportunitiesAvg(opportunitieSum / count);
        setSocialAvg(socialSum / count);
        setFacilitiesAvg(facilitiSum / count);
        setLocationAvg(locationSum / count);
        setSafetyAvg(safetySum / count);

        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [item.id]);
  return (
    <div>
      <Navbar showLinks={false} showSearchBar={true} />

      <div className="action-btns">
        <Link
          style={{ textDecoration: "none" }}
          to="/rateCompany"
          state={item.id}
        >
          <Button variant="contained" color="primary">
            <b> Rate {item.name}</b>
          </Button>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/addCompany">
          <Button variant="contained" color="success">
            <b> Add New Company</b>
          </Button>
        </Link>
      </div>

      {data.length === 0 ? (
        <div>
          <h1 style={{ textAlign: "center", color: "red" }}>NO RATING YET</h1>
        </div>
      ) : (
        <div className="school-results-container">
          <h1>{item.name}</h1>
          <a href={item.website} target="_blank" style={{ marginBottom: "2%" }}>
            Visit Official website
          </a>
          <div className="school-summary-container">
            <div className="school-summary-half">
              <div className="school-summary-child">
                <div className="school-summary-child-left">
                  <img src={happiness} alt="" />
                  <p>Happiness</p>
                </div>
                <div className="school-summary-child-right">
                  <h3>{parseFloat(happinessAvg).toFixed(1)}</h3>
                </div>
              </div>
              <div className="school-summary-child">
                <div className="school-summary-child-left">
                  <img src={internet} alt="" />
                  <p>Internet</p>
                </div>
                <div className="school-summary-child-right">
                  <h3>{parseFloat(internetAvg).toFixed(1)}</h3>
                </div>
              </div>
              <div className="school-summary-child">
                <div className="school-summary-child-left">
                  <img src={management} alt="" />
                  <p>Management</p>
                </div>
                <div className="school-summary-child-right">
                  <h3>{parseFloat(managementAvg).toFixed(1)}</h3>
                </div>
              </div>
              <div className="school-summary-child">
                <div className="school-summary-child-left">
                  <img src={clubs} alt="" />
                  <p>Clubs</p>
                </div>
                <div className="school-summary-child-right">
                  <h3>{parseFloat(clubsAvg).toFixed(1)}</h3>
                </div>
              </div>
              <div className="school-summary-child">
                <div className="school-summary-child-left">
                  <img src={reputation} alt="" />
                  <p>Reputation</p>
                </div>
                <div className="school-summary-child-right">
                  <h3>{parseFloat(reputationAvg).toFixed(1)}</h3>
                </div>
              </div>
            </div>

            <div className="school-summary-half">
              <div className="school-summary-child">
                <div className="school-summary-child-left">
                  <img src={opportunities} alt="" />
                  <p>Opportunities</p>
                </div>
                <div className="school-summary-child-right">
                  <h3>{parseFloat(opportunitiesAvg).toFixed(1)}</h3>
                </div>
              </div>
              <div className="school-summary-child">
                <div className="school-summary-child-left">
                  <img src={social} alt="" />
                  <p>Social</p>
                </div>
                <div className="school-summary-child-right">
                  <h3>{parseFloat(socialAvg).toFixed(1)}</h3>
                </div>
              </div>
              <div className="school-summary-child">
                <div className="school-summary-child-left">
                  <img src={facilities} alt="" />
                  <p>Facilities</p>
                </div>
                <div className="school-summary-child-right">
                  <h3>{parseFloat(facilitiesAvg).toFixed(1)}</h3>
                </div>
              </div>
              <div className="school-summary-child">
                <div className="school-summary-child-left">
                  <img src={Location} alt="" />
                  <p>Location</p>
                </div>
                <div className="school-summary-child-right">
                  <h3>{parseFloat(locationAvg).toFixed(1)}</h3>
                </div>
              </div>
              <div className="school-summary-child">
                <div className="school-summary-child-left">
                  <img src={safety} alt="" />
                  <p>Safety</p>
                </div>
                <div className="school-summary-child-right">
                  <h3>{parseFloat(safetyAvg).toFixed(1)}</h3>
                </div>
              </div>
            </div>
          </div>
          {data.map((rating) => (
            <div className="school-rating-cell" key={rating.id}>
              <div className="rating-cell-left">
                <p>Overall</p>
                <h1>
                  {(rating.reputation +
                    rating.location +
                    rating.opportunities +
                    rating.facilities +
                    rating.internet +
                    rating.management +
                    rating.clubs +
                    rating.social +
                    rating.happiness +
                    rating.safety) /
                    10}
                </h1>
              </div>
              <div className="rating-cell-right">
                <div className="right-cell-header">
                  <h4 className="singal-word">
                    {(rating.reputation +
                      rating.location +
                      rating.opportunities +
                      rating.facilities +
                      rating.internet +
                      rating.management +
                      rating.clubs +
                      rating.social +
                      rating.happiness +
                      rating.safety) /
                      10 >
                    3
                      ? "GREAT"
                      : "AWFUL"}
                  </h4>
                  <h4>{rating.timestamp.toDate().toDateString()}</h4>
                </div>
                <div className="right-cell-description">
                  <p>{rating.review}</p>
                  <Button
                    variant="outlined"
                    size="small"
                    color="error"
                    onClick={() => handleReportButtonClicked(rating.commentId)}
                    startIcon={<ReportIcon />}
                  >
                    Report
                  </Button>
                </div>
                <div className="right-cell-results">
                  <div className="right-cell-results-left">
                    <div className="result-cell">
                      <b>Reputation</b>
                      <Rating
                        name="read-only"
                        value={rating.reputation}
                        readOnly
                        sx={{
                          fontSize: "1.6rem",
                          "& .MuiRating-icon": {
                            width: "0rem",
                          },
                        }}
                      />
                    </div>
                    <div className="result-cell">
                      <b>Location</b>
                      <Rating
                        name="read-only"
                        value={rating.location}
                        readOnly
                        sx={{
                          fontSize: "1.6rem",
                          "& .MuiRating-icon": {
                            width: "0rem",
                          },
                        }}
                      />
                    </div>
                    <div className="result-cell">
                      <b>Opportunities</b>
                      <Rating
                        name="read-only"
                        value={rating.opportunities}
                        readOnly
                        sx={{
                          fontSize: "1.6rem",
                          "& .MuiRating-icon": {
                            width: "0rem",
                          },
                        }}
                      />
                    </div>
                    <div className="result-cell">
                      <b>Facilities</b>
                      <Rating
                        name="read-only"
                        value={rating.facilities}
                        readOnly
                        sx={{
                          fontSize: "1.6rem",
                          "& .MuiRating-icon": {
                            width: "0rem",
                          },
                        }}
                      />
                    </div>
                    <div className="result-cell">
                      <b>Internet</b>
                      <Rating
                        name="read-only"
                        value={rating.internet}
                        readOnly
                        sx={{
                          fontSize: "1.6rem",
                          "& .MuiRating-icon": {
                            width: "0rem",
                          },
                        }}
                      />
                    </div>
                  </div>
                  <div className="right-cell-results-left">
                    <div className="result-cell">
                      <b>Management</b>
                      <Rating
                        name="read-only"
                        value={rating.management}
                        sx={{
                          fontSize: "1.6rem",
                          "& .MuiRating-icon": {
                            width: "0rem",
                          },
                        }}
                        readOnly
                      />
                    </div>
                    <div className="result-cell">
                      <b>Clubs</b>
                      <Rating
                        name="read-only"
                        value={rating.clubs}
                        sx={{
                          fontSize: "1.6rem",
                          "& .MuiRating-icon": {
                            width: "0rem",
                          },
                        }}
                        readOnly
                      />
                    </div>
                    <div className="result-cell">
                      <b>Social</b>
                      <Rating
                        name="read-only"
                        value={rating.social}
                        sx={{
                          fontSize: "1.6rem",
                          "& .MuiRating-icon": {
                            width: "0rem",
                          },
                        }}
                        readOnly
                      />
                    </div>
                    <div className="result-cell">
                      <b>Happiness</b>
                      <Rating
                        name="read-only"
                        value={rating.happiness}
                        readOnly
                        sx={{
                          fontSize: "1.6rem",
                          "& .MuiRating-icon": {
                            width: "0rem",
                          },
                        }}
                      />
                    </div>
                    <div className="result-cell">
                      <b>Safety</b>
                      <Rating
                        name="read-only"
                        value={rating.safety}
                        readOnly
                        sx={{
                          fontSize: "1.6rem",
                          "& .MuiRating-icon": {
                            width: "0rem",
                          },
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <ReportDialog
        open={isReportDialogOpen}
        onClose={() => setReportDialogOpen(false)}
        onSubmit={handleReportSubmit}
      />
    </div>
  );
};

export default CompanyResult;
