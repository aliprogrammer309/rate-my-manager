import React from "react";
import "./add.css";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const AddCoworker = () => {
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
      const docRef = await addDoc(collection(db, "Coworkers"), {
        name: firstName + " " + lastName,
        company: companyName,
        department: department,
        socialMediaLink: socialMediaLink,
      });
      console.log("Document written with ID: ", docRef.id);
      alert(firstName + " " + lastName + " added as a new coworker.");
      item.id = docRef.id;
      navigate("/coworkerResult", { state: item });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar showSearchBar={true} />

      <div className="add">
        <form className="addContainer" onSubmit={handleSubmit}>
          <h1>Add A Coworker</h1>
          <em>Please make sure that the coworker does not already exist.</em>
          <input type="text" required placeholder="Name of Company" />
          <input type="text" required placeholder="Coworker's First Name" />
          <input type="text" required placeholder="Coworker's Last Name" />
          <input type="text" required placeholder="Department" />
          <input
            type="url"
            placeholder="Social Media link of Coworker"
          />
          <button type="submit">Add Coworker</button>
        </form>
      </div>
    </>
  );
};

export default AddCoworker;
