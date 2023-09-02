import React, { useState } from "react";
import "./searchProfessor.css";
import hero_img from "../../assets/main.jpg";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";
import StaticSection from "../static sections/StaticSection";
import Navbar from "../navbar/Navbar";

const SearchCoworker = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Coworkers"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setItems(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleOnSelect = (item) => {
    console.log(item);
    navigate("/coworkerResult", { state: item });
  };

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          Name: {item.name}
        </span>
        <span style={{ display: "block", textAlign: "left" }}>
          Company: {item.company}
        </span>
      </>
    );
  };

  return (
    <>
      <Navbar showLinks={true} showSearchBar={false} />
      <section>
        <div className="image_wrapper">
          <img src={hero_img} alt="hero" />
          <div className="overlay overlay_2">
            <h3 style={{ marginBottom: "25px" }}>
              <em>RATE a COWORKER</em>
            </h3>
            <div style={{ width: 360 }}>
              <ReactSearchAutocomplete
                items={items}
                onSelect={handleOnSelect}
                showNoResults
                maxResults="6"
                showClear
                placeholder="Search Coworker"
                formatResult={formatResult}
              />
            </div>
            <div className="searching-options">
              <Link to="/" style={{ marginTop: "15px", color: "white" }}>
                <b className="searching-links">Search for a manager</b>
              </Link>
              <Link
                to="/searchCompany"
                style={{ marginTop: "15px", color: "white" }}
              >
                <b className="searching-links">Search for a company</b>{" "}
              </Link>
            </div>
            <p
              style={{ color: "white", marginTop: "10px", fontStyle: "italic" }}
            >
              <Link
                to="/addCoworker"
                style={{ marginTop: "15px", color: "white" }}
              >
                <b className="searching-links">Add New Coworker.</b>
              </Link>
            </p>
          </div>
        </div>
        <StaticSection />
      </section>
    </>
  );
};

export default SearchCoworker;
