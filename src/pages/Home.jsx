import "./Home.css";
import MainMovies from "./MainMovies";
import Navigation from "../components/navigation";
const Home = () => {
  function call() {
    const enurl = window.btoa(
      "https://skilldoor.driveas.workers.dev/0:/COURSES%20BY%20ANKIT/Copy%20of%20Interstellar.2014.720p.BluRay.x264.YIFY.mp4"
    );
    const murl = "https://netflix-techarmy.me./index2.html?name=" + enurl;
    window.location.assign(murl);
  }
  return (
    <>
      <Navigation />

      <div className="backimage">
        <img className="back" src="./images/poster-min.jpg" alt="" />
      </div>
      <div className="back-text">
        <img className="back-img" src="./images/back-text.png" alt="" />
        <button id="play" onClick={call}>
          Play <i className="fas fa-play"></i>
        </button>
      </div>

      <MainMovies />
      <div className="credit">
        <img src="./images/netflix-logo-png-2583.png" alt="" />
        Design By Ankit
      </div>
    </>
  );
};

export default Home;
