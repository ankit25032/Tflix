import "./main.css";
import Movies from "../components/Movies";
import Navigation from "../components/navigation";
const MainMovies2 = (props) => {
  return (
    <>
      <Navigation />
      <h1 className="mtitle">Movies</h1>
      <Movies j={561} k={600} />
      <Movies j={531} k={560} />
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
      <div className="credit">
        <img src="./images/netflix-logo-png-2583.png" alt="" />
        Design By Ankit
      </div>
    </>
  );
};

export default MainMovies2;
