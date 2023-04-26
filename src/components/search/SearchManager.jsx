import React, { useState } from "react";
import "./searchProfessor.css";
import hero_img from "../../assets/main.jpg";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Link, useNavigate } from "react-router-dom";

const SearchManager = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // const [searchTerm, setSearchTerm] = useState("");

  // const [notFound, setNotFound] = useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Managers"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setItems(list);
        // console.log(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  // console.log(items);

  // const items = [
  //   {
  //     id: 0,
  //     name: "Cobol",
  //   },
  //   {
  //     id: 1,
  //     name: "JavaScript",
  //   },
  //   {
  //     id: 2,
  //     name: "Basic",
  //   },
  //   {
  //     id: 3,
  //     name: "PHP",
  //   },
  //   {
  //     id: 4,
  //     name: "Java",
  //   },
  // ];

  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    // console.log(item);
    navigate("/ManagerResult", { state: item });
  };

  const handleOnFocus = () => {
    console.log("Focused");
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
    <section>
      <div className="image_wrapper">
        <img src={hero_img} alt="hero" />
        <div className="overlay overlay_2">
          {/* <div> */}
          <h3 style={{ marginBottom: "25px" }}>
            <em>RATE THE MANAGER</em>
          </h3>
          <h4 style={{ marginBottom: "25px" }}>
            Find a <b>manager</b>
          </h4>
          {/* <input className='.user-input' type="text" placeholder='Professor name' /> */}
          {/* </div> */}
          <div style={{ width: 360 }}>
            <ReactSearchAutocomplete
              items={items}
              // onSearch={handleOnSearch}
              // onHover={handleOnHover}
              onSelect={handleOnSelect}
              showNoResults
              maxResults="6"
              showClear
              placeholder="Search Manager"
              formatResult={formatResult}
            />
          </div>
          <Link
            to="/searchCompany"
            style={{ marginTop: "15px", color: "white" }}
          >
            I want to search for a company
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SearchManager;
