import "./main.css";
import Movies from "../components/Movies";
import { useState, useEffect } from "react";
const MainMovies = (props) => {
  const [data, setdata] = useState("");
  useEffect(() => {
    let arr = [];
    for (let i = 0; i < 600; i = i + 30) {
      arr.push(<Movies key={i} j={i} k={i + 30} />);
    }
    setdata(arr);
    console.log(arr);
  }, []);

  return (
    <>
      <h1 className="mtitle23">Movies</h1>
      {data}
      {/* <Movies j={531} k={560} />

      <Movies j={400} k={430} />
      <Movies j={61} k={100} />
      <Movies j={331} k={360} />
      <Movies j={361} k={400} />
      <Movies j={261} k={300} />
      <Movies j={201} k={230} />
      <Movies j={231} k={260} />
      <Movies j={301} k={330} />
      <Movies j={501} k={530} />
      <Movies j={431} k={460} />
      <Movies j={461} k={500} />
      <Movies j={1} k={30} />
      <Movies j={31} k={60} />
      <Movies j={171} k={200} />
      <Movies j={110} k={140} />
      <Movies j={141} k={170} />

      <Movies j={231} k={260} />

      <Movies j={631} k={660} />
      <Movies j={661} k={700} />
      <Movies j={700} k={730} />
      <Movies j={730} k={760} />
      <Movies j={760} k={800} />
      <Movies j={800} k={830} />
      <Movies j={830} k={860} />
      <Movies j={860} k={900} />
      <Movies j={900} k={930} />
      <Movies j={661} k={700} /> */}
    </>
  );
};

export default MainMovies;
