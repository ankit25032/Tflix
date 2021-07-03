import { useParams, useHistory } from "react-router";
import Loader from "react-loader-spinner";
import { useState } from "react";
import { useRef } from "react";
import Plyr from "plyr";
import "./movies.css";
import { useEffect } from "react";
const Video = () => {
  const history = useHistory();
  let { id } = useParams();
  const [link, setlink] = useState([]);

  const disable = useRef();

  const icon = useRef();

  useEffect(() => {
    fetch(`https://netflix-ankit.ankitzxi05.repl.co/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data2) => {
        const player = new Plyr("#player");
        console.log(player);
        setlink(data2.url);

        setTimeout(() => {
          disable.current.style.display = "none";
          icon.current.style.display = "block";
        }, 3000);
      });
  });
  return (
    <>
      <div className="loaderarea" ref={disable}>
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </div>
      <>
        <div
          ref={icon}
          className="back-btn"
          onClick={() => {
            history.goBack();
          }}
        >
          <i className="fas fa-long-arrow-alt-left-light"></i>
        </div>
        <div className="vcontainer">
          <video
            id="player"
            src={link}
            controls
            data-poster="/path/to/poster.jpg"
          ></video>
        </div>
      </>
    </>
  );
};

export default Video;
