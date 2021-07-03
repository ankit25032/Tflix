import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
const Navigation = () => {
  const [disp, setdisp] = useState(null);
  const [dip, setdip] = useState("bars");
  const nav = useRef();

  function toogle() {
    if (disp == null) {
      setdisp("show");
      nav.current.style.background = "black";
      setdip("times");
    } else {
      setdisp(null);
      nav.current.style.background = "none";
      setdip("bars");
    }
  }
  return (
    <>
      <div className="nav" ref={nav}>
        <div className="logo">
          <Link to="/">
            <img
              src="./images/netflix-logo-png-2583.png"
              className="logo-l"
              alt=""
            />
          </Link>
        </div>
        <div className="items">
          <Link to="/" className="home">
            Home
          </Link>
          <Link to="/movies" href="#type">
            Hollywood
          </Link>
          <Link to="/bollywood" href="#type">
            Bollywood
          </Link>
        </div>
        <div className="search">
          <Link to="/Search">
            <div className="search-btn ">
              <i className="fa fa-search"></i>
            </div>
          </Link>
        </div>
        <button className="menu" onClick={toogle}>
          <i className={`fa fa-${dip}`}></i>
        </button>
      </div>
      <div className={`menuitems ${disp}`}>
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/movies" href="#type">
          Hollywood
        </Link>
        <Link to="/bollywood" href="#type">
          Bollywood
        </Link>
      </div>
    </>
  );
};

export default Navigation;
