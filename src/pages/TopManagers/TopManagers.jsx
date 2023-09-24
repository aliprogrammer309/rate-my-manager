import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { useState } from "react";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase";
import ManagerCard from "./ManagerCard";
import './topmanagers.css'

const TopManagers = () => {
  const [ids_data, setIdsData] = useState([]);
  const [data1, setData1] = useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const q = query(
          collection(db, "ManagerRatings"),
          where("rating", "==", 5),
          orderBy("timestamp", "desc")
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          list.push({ _id: doc.id, ...doc.data() });
        });
        const id_set = new Set(list.map((obj) => obj.id));
        // console.log(id_set);
        setIdsData([...id_set]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(ids_data);

  React.useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Managers"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData1(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  // console.log(data1);

  return (
    <>
      <Navbar showSearchBar={true} />
      <h1 style={{textAlign:"center", margin:"100px 0 50px 0"}}>Top Rated Managers</h1>
      <div className="top-managers-container">
        {data1.map((item) =>
          ids_data.includes(item.id) ? (
            <div>
              <ManagerCard name={item.name} company={item.company} department={item.department} id={item.id}/>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </>
  );
};

export default TopManagers;
