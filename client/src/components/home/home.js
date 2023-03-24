import DynamicCards from "../cards/cards";
import Navbar from "../navbar";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const response = await axios.get("http://localhost:5000/api/");

    // const jsonData = await JSON.parse(response.data);

    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Navbar />
      <DynamicCards data={data} />
    </div>
  );
};

export default Home;
