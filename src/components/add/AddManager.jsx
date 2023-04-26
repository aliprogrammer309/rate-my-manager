import React from "react";
import "./add.css";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

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

    try {
      const docRef = await addDoc(collection(db, "Managers"), {
        name: firstName + " " + lastName,
        company: companyName,
        department: department,
        socialMediaLink: socialMediaLink,
      });
      console.log("Document written with ID: ", docRef.id);
      alert(firstName + " " + lastName + " added as a new manager.");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleTesting = async () => {
    // console.log("testing");
    // try {
    //   const docRef = doc(db, "Professors", "5WhaBCp5RTh6PSbua4lY");
    //   await updateDoc(docRef, {
    //     ratings: arrayUnion("5 Star")
    // });
    // } catch (error) {
    //   console.log(error);
    // }
    // console.log("testing");
    // try {
    //   const querySnapshot = await getDocs(collection(db, "Professors"));
    //   querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(doc.id, " => ", doc.data().name);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
    // console.log("testing");
    // try {
    //   const q = query(
    //     collection(db, "Professors"),
    //     where("name", "==", "Usama Hafeez")
    //   );
    //   const querySnapshot = await getDocs(q);
    //   querySnapshot.forEach((doc) => {
    //     // doc.data() is never undefined for query doc snapshots
    //     console.log(
    //       doc.id,
    //       " => ",
    //       doc.data().name,
    //       doc.data().school,
    //       doc.data().ratings[0]
    //     );
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
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
        {/* <button onClick={handleTesting}>Check</button> */}
      </form>
    </div>
  );
};

export default AddManager;
