import "./Home.css";
import "../components/movies.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";
import Smovies from "../components/smovie";
const Search = () => {
  const [disp, setdisp] = useState(null);
  const [set, setstate] = useState([]);
  const nav = useRef();
  const btn = useRef();
  const input = useRef();
  const clean = useRef();
  function capitalize(input) {
    var words = input.split(" ");
    var CapitalizedWords = [];
    words.forEach((element) => {
      CapitalizedWords.push(
        element[0].toUpperCase() + element.slice(1, element.length)
      );
    });
    return CapitalizedWords.join(" ");
  }

  async function call(name) {
    const rname = capitalize(name);
    let bindex = [];

    const res2 = await fetch("./config.json");
    const data2 = await res2.json();
    for (let i = 0; i < 660; i++) {
      if (data2[i].title.includes(rname)) {
        bindex.push(
          <Smovies
            key={i}
            imgUrl={data2[i].imgurl}
            title={data2[i].title}
            link={data2[i].dlink}
            over={data2[i].overview}
            rating={data2[i].rating}
          />
        );
      }
    }
    const res3 = await fetch("./bollywood.json");
    const data3 = await res3.json();
    for (let i = 0; i < 2100; i++) {
      if (await data3[i].title.includes(rname)) {
        bindex.push(
          <Smovies
            key={i}
            imgUrl={data3[i].imgurl}
            title={data3[i].title}
            link={data3[i].dlink}
            over={data3[i].overview}
            rating={data3[i].rating}
          />
        );
      }
    }

    setstate(bindex);
  }
  function toogle() {
    if (disp == null) {
      setdisp("show");
      nav.current.style.background = "black";
    } else {
      setdisp(null);
      nav.current.style.background = "none";
    }
  }
  const keypress = (event) => {
    if (event.key === "Enter") {
      btn.current.click();
    }
  };
  function calling() {
    call(input.current.value);
  }
  return (
    <>
      <div className="nav2" ref={nav}>
        <div className="logo">
          <Link to="/">
            <img
              src="./images/netflix-logo-png-2583.png"
              className="logo-l"
              alt=""
            />
          </Link>
        </div>
        <div className="items2">
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
        <div className="bar"></div>

        <button className="menu2" onClick={toogle}>
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <div className={`menuitems ${disp}`}>
        <Link to="/" href="#type">
          Home
        </Link>
        <Link to="/movies" href="#type">
          Hollywood
        </Link>
        <Link to="/bollywood" href="#type">
          Bollywood
        </Link>
      </div>
      <div className="search-a">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          onKeyPress={keypress}
          ref={input}
        />
        <button className="search-button" ref={btn} onClick={calling}>
          Search
        </button>
      </div>
      <>
        <div className="container2 scontain" ref={clean}>
          <div className="main-3">{set}</div>
        </div>
      </>
    </>
  );
};

export default Search;
