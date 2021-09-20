import "./main.css";
import Movies from "../components/Movies";
import Navigation from "../components/navigation";
import { useState, useEffect } from "react";
const MainMovies2 = (props) => {
  const [data, setdata] = useState("");
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 660; i = i + 30) {
      arr.push(<Movies key={i} j={i} k={i + 30} />);
    }
    setdata(arr);
  }, []);

  return (
    <>
      <Navigation />
      <h1 className="mtitle">Movies</h1>
      {data}
      <div className="credit">
        <img src="./images/netflix-logo-png-2583.png" alt="" />
        Design By Ankit
      </div>
    </>
  );
};

export default MainMovies2;
