import React from "react";
import "./add.css";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const AddManager = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const companyName = e.target[0].value;
    const firstName = e.target[1].value;
    const lastName = e.target[2].value;
    const department = e.target[3].value;
    const socialMediaLink = e.target[4].value;
    // console.log(schoolName, firstName, lastName, department, directoryList);

    var item = {
      company: companyName,
      department: department,
      name: firstName + " " + lastName,
      socialMediaLink: socialMediaLink
    };

    try {
      const docRef = await addDoc(collection(db, "Managers"), {
        name: firstName + " " + lastName,
        company: companyName,
        department: department,
        socialMediaLink: socialMediaLink,
      });
      console.log("Document written with ID: ", docRef.id);
      alert(firstName + " " + lastName + " added as a new manager.");
      item.id = docRef.id;
      navigate("/managerResult", { state: item });
    } catch (error) {
      console.log(error);
    }
  };

  
  return (
    <>
      <Navbar showLinks={false} showSearchBar={true} />
      <div className="add">
        <form className="addContainer" onSubmit={handleSubmit}>
          <h1>Add A Manager</h1>
          <em>Please make sure that the manager does not already exist.</em>
          <input type="text" required placeholder="Name of Company" />
          <input type="text" required placeholder="Manager's First Name" />
          <input type="text" required placeholder="Manager's Last Name" />
          <input type="text" required placeholder="Department" />
          <input
            type="text"
            required
            placeholder="Social Media link of Manager"
          />
          <button type="submit">Add Manager</button>
        </form>
      </div>
    </>
  );
};

export default AddManager;
