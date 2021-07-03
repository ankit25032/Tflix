import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useRef } from "react";
import "./movies.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Smovies = (props) => {
  const card = useRef(null);
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(1);
    }, 2000);
  }, []);
  const [hover, setHover] = useState("precontent");
  function move() {
    setHover("null");
  }
  function scale() {
    document.body.classList.add("scale");
    setTimeout(() => {
      window.location.assign(`/video/${encodeURIComponent(props.link)}`);
    }, 1000);
  }
  return (
    <>
      {data && (
        <div className="card" ref={card}>
          <div className="img">
            <img loading="lazy" src={props.imgUrl} alt="" onMouseOver={move} />
          </div>
          <div className={`content ${hover}`} onMouseOver={move}>
            <div className="firstc">
              <div className="overview">
                <p className="mtitle2">{props.title}</p>
                <p>{props.over}</p>
              </div>
            </div>
            <div className="secondc">
              <div className="playarea">
                <button className="play" onClick={scale}>
                  <i className="fas fa-play"></i>
                </button>
                Watch Now
              </div>
              <div className="rating">{props.rating}</div>
            </div>
          </div>
        </div>
      )}
      {!data && (
        <div className="kk">
          <SkeletonTheme color="#202020" highlightColor="#2b2b2a">
            <Skeleton height={256} />
            <Skeleton />
          </SkeletonTheme>
        </div>
      )}
    </>
  );
};

export default Smovies;
