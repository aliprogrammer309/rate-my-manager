import { Button } from "@mui/material";
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
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReportIcon from "@mui/icons-material/Report";
import { db } from "../../firebase";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "../personReview/personReview.css";
import Navbar from "../navbar/Navbar";
import { useUserAuth } from "../../context/UserAuthContext";
import ReportDialog from "../ReportDialog/ReportDialog";

const CoworkerResult = () => {
  Chart.register(...registerables);
  const [data, setData] = useState([]);
  const [barData, setBarData] = useState([]);
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

  const location = useLocation();
  const item = location.state;

  React.useEffect(() => {
    const fetchData = async () => {
      let list = [];
      let ratings_list = [0, 0, 0, 0, 0];
      try {
        const q = query(
          collection(db, "CoworkerRatings"),
          where("id", "==", item.id),
          orderBy("timestamp", "desc")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if (doc.data().competency === 5) {
            ratings_list[4] = ratings_list[4] + 1;
          } else if (doc.data().competency === 4) {
            ratings_list[3] = ratings_list[3] + 1;
          } else if (doc.data().competency === 3) {
            ratings_list[2] = ratings_list[2] + 1;
          } else if (doc.data().competency === 2) {
            ratings_list[1] = ratings_list[1] + 1;
          } else if (doc.data().competency === 1) {
            ratings_list[0] = ratings_list[0] + 1;
          }

          list.push({ id: doc.id, commentId: doc.id, ...doc.data() });
        });
        setData(list);
        setBarData(ratings_list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [item.id]);

  const transformData = (barData) => {
    const labels = ["1 Star", "2 Stars", "3 Stars", "4 Stars", "5 Stars"];
    return {
      labels,
      datasets: [
        {
          label: "Ratings",
          data: barData,
          backgroundColor: [
            "rgba(255, 0, 0,0.5)",
            "rgba(255, 165, 0,0.5)",
            "rgba(255,255,0,0.5)",
            "rgba(0,0,255,0.5)",
            "rgba(0, 255, 0,0.5)",
          ],
        },
      ],
    };
  };

  return (
    <div>
      <Navbar showLinks={false} showSearchBar={true} />

      <div className="action-btns">
        <Link
          style={{ textDecoration: "none" }}
          to="/rateCoworker"
          state={item.id}
        >
          <Button variant="contained" color="primary">
            <b> Rate {item.name}</b>
          </Button>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/addCoworker">
          <Button variant="contained" color="success">
            <b> Add New Coworker</b>
          </Button>
        </Link>
      </div>
      {data.length === 0 ? (
        <div>
          <h1 style={{ textAlign: "center", color: "red" }}>NO RATING YET</h1>
        </div>
      ) : (
        <div className="ratings-container">
          <h1>
            <em>{item.name}</em>
          </h1>
          <b>
            <p>
              From: <em>{item.company}</em>
            </p>
          </b>
          <div className="chart-container">
            <Bar data={transformData(barData)} />
          </div>
          {data.map((rating) => (
            <div className="rating-card">
              <div className="left">
                <div className="rate">
                  <div className="side-box">
                    <p>Competence</p>
                    <h1>{rating.competency}</h1>
                  </div>
                </div>
                <div className="rate">
                  <div className="side-box">
                    <p>Dependable</p>
                    <h1>{rating.dependable}</h1>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="right-header">
                  <div className="cell">
                    <h4>{rating.company}</h4>

                    <span className="spacing">
                      <h4 style={{ background: "yellow", padding: "5px" }}>
                        {parseInt(rating.competency) > 3 ? "AWESOME" : "AWEFUL"}
                      </h4>
                    </span>
                  </div>
                  <div>
                    <span>
                      <h4>{rating.timestamp.toDate().toDateString()}</h4>
                    </span>
                  </div>
                </div>
                <div className="right-middle">
                  <span className="spacing">
                    Dependable: <b>{rating.dependable}</b>
                  </span>
                  <span className="spacing">
                    Trustworthiness: <b>{rating.trustworthiness}</b>
                  </span>
                  <span className="spacing">
                    Decision Making: <b>{rating.decisionMaking}</b>
                  </span>
                  <span className="spacing">
                    Dedication: <b>{rating.dedication}</b>
                  </span>
                  <span className="spacing">
                    Cooperative: <b>{rating.withOthers}</b>
                  </span>
                </div>
                <div className="right-decription">
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

export default CoworkerResult;
