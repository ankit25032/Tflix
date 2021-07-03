import { useState, useEffect } from "react";
import { useRef } from "react";
import Smovies from "./smovie";

const Bmovies = (props) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch("./bollywood.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let arr = [];
        for (let i = props.j; i <= props.k; i++) {
          arr.push(
            <Smovies
              key={i}
              imgUrl={data[i].imgurl}
              title={data[i].title}
              link={data[i].dlink}
              over={data[i].overview}
              rating={data[i].rating}
            />
          );
        }
        setState(arr);
      });
  }, [props.j, props.k]);
  //left and right scrolls
  const hscroll = useRef(null);
  const scrollL = (sender) => {
    var obj = sender.parentNode;
    var currscroll = obj.scrollLeft;
    var ss = currscroll - 400;
    if (ss < 0) {
      ss = 0;
    }
    obj.scrollLeft = ss;
  };
  function scrollR(sender) {
    var obj = sender.parentNode;
    var width = obj.scrollWidth;
    var currscroll = obj.scrollLeft;
    var ss = currscroll + 400;
    if (ss >= width) {
      ss = width;
    }
    obj.scrollLeft = ss;
  }

  return (
    <>
      <div className="container2">
        <div className="main-2" ref={hscroll}>
          <div
            className="mover-left"
            onClick={() => {
              scrollL(hscroll.current);
            }}
          >
            {"<"}
          </div>
          {state}
          <div
            className="mover-right"
            onClick={() => {
              scrollR(hscroll.current);
            }}
          >
            {">"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bmovies;
