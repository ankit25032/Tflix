import Bmovies from "./Bmovies";
import Navigation from "./navigation";
const Bollywood = () => {
  return (
    <>
      <Navigation />

      <Bmovies j={1000} k={1040} />
      <Bmovies j={1500} k={1550} />

      <Bmovies j={1600} k={1650} />
      <Bmovies j={1700} k={1750} />
      <Bmovies j={1800} k={1850} />
      <Bmovies j={1900} k={1950} />
      <Bmovies j={2000} k={2050} />
      <Bmovies j={2150} k={2150} />
      <Bmovies j={1100} k={1150} />
      <Bmovies j={1200} k={1250} />
      <Bmovies j={1300} k={1350} />
      <Bmovies j={1400} k={1450} />
      <Bmovies j={461} k={500} />
      <Bmovies j={1} k={30} />
      <Bmovies j={31} k={60} />
      <Bmovies j={171} k={200} />
      <Bmovies j={110} k={140} />
      <Bmovies j={141} k={170} />

      <Bmovies j={231} k={260} />

      <div className="credit">
        <img src="./images/netflix-logo-png-2583.png" alt="" />
        Design By Ankit
      </div>
    </>
  );
};

export default Bollywood;
