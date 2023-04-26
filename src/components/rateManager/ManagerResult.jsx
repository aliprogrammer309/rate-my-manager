import { Button } from "@mui/material";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { db } from "../../firebase";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import "../personReview/personReview.css";

const ManagerResult = () => {
  Chart.register(...registerables);
  const [data, setData] = useState([]);
  const [barData, setBarData] = useState([]);

  const location = useLocation();
  const item = location.state;

  React.useEffect(() => {
    const fetchData = async () => {
      let list = [];
      let ratings_list = [0, 0, 0, 0, 0];
      try {
        const q = query(
          collection(db, "ManagerRatings"),
          where("id", "==", item.id),
          orderBy("timestamp", "desc")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          if (doc.data().rating === 5) {
            ratings_list[4] = ratings_list[4] + 1;
          } else if (doc.data().rating === 4) {
            ratings_list[3] = ratings_list[3] + 1;
          } else if (doc.data().rating === 3) {
            ratings_list[2] = ratings_list[2] + 1;
          } else if (doc.data().rating === 2) {
            ratings_list[1] = ratings_list[1] + 1;
          } else if (doc.data().rating === 1) {
            ratings_list[0] = ratings_list[0] + 1;
          }

          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
        setBarData(ratings_list);
        // console.log(fiveStars);
        // console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
      <div className="action-btns">
        <Link
          style={{ textDecoration: "none" }}
          to="/rateManager"
          state={item.id}
        >
          <Button variant="contained" color="primary">
            <b> Rate {item.name}</b>
          </Button>
        </Link>

        <Link style={{ textDecoration: "none" }} to="/addManager">
          <Button variant="contained" color="success">
            <b> Add New Manager</b>
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
          <div class="chart-container">
            <Bar data={transformData(barData)} />
          </div>
          {data.map((rating) => (
            <div className="rating-card">
              <div className="left">
                <div className="rate">
                  <div className="side-box">
                    <p>Quality</p>
                    <h1>{rating.rating}</h1>
                  </div>
                </div>
                <div className="rate">
                  <div className="side-box">
                    <p>Difficulty</p>
                    <h1>{rating.difficulty}</h1>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className="right-header">
                  <div className="cell">
                    <h4>{rating.company}</h4>

                    <span className="spacing">
                      <h4 style={{ background: "yellow", padding: "5px" }}>
                        {parseInt(rating.rating) > 3 ? "AWESOME" : "AWEFUL"}
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
                    Would work again: <b>{rating.workAgain}</b>
                  </span>
                  <span className="spacing">
                    Made Progress: <b>{rating.progress}</b>
                  </span>
                  <span className="spacing">
                    Guided: <b>{rating.guidance}</b>
                  </span>
                  <span className="spacing">
                    Truthful: <b>{rating.truth}</b>
                  </span>
                  <span className="spacing">
                    My grade: <b>{rating.grade}</b>
                  </span>
                </div>
                <div className="right-decription">
                  <p>{rating.review}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManagerResult;
