import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { db } from "../../firebase";
import "./add.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const AddCompany = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const companyName = e.target[0].value;
    const storeNumber = e.target[1].value;
    const address = e.target[2].value;
    const website = e.target[3].value;
    const userEmail = e.target[4].value;
    // console.log(schoolName, firstName, lastName, department, directoryList);
    var item = {
      name: companyName,
      address: address,
      storeNumber: storeNumber,
      website: website,
    };

    try {
      const docRef = await addDoc(collection(db, "Companies"), {
        name: companyName,
        storeNumber: storeNumber,
        address: address,
        website: website,
        userEmail: userEmail,
      });
      console.log("Document written with ID: ", docRef.id);
      alert(companyName + " added as a new company.");
      item.id = docRef.id;
      navigate("/companyResult", { state: item });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar showSearchBar={true} />
      <form className="addContainer" onSubmit={handleSubmit}>
        <h1>Add a Company</h1>
        <em>Please make sure that the company does not already exist.</em>
        <input type="text" required placeholder="Name of Company" />
        <input type="number" required placeholder="Store number or unit" />
        <input type="text" placeholder="Address" />
        <input type="text" required placeholder="Link of Company Website" />
        <input type="email" required placeholder="Your Email" />
        <button type="submit">Add Company</button>
      </form>
    </div>
  );
};

export default AddCompany;
