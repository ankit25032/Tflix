import "./App.css";
import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/search";
import MainMovies2 from "./pages/MainMovies2";
import Bollywood from "./components/Bollywood";
import Video from "./components/video";

import { AnimatePresence } from "framer-motion";
const App = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path={`/video/:id`} component={Video} exact />
          <Route path="/" component={Home} exact />
          <Route path="/movies" component={MainMovies2} exact />
          <Route path="/bollywood" component={Bollywood} exact />
          <Route path="/search" component={Search} exact />
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;
