import { Switch, Route } from "react-router-dom";
import "./App.scss";

import Navigation from "./components/Navigation/Navigation";
import HomePage from "./views/HomePage/HomePage";
import NotFoundView from "./views/NotFoundView";
import Movies from "./views/Movies/Movies";
import MovieDetails from "./components/MovieDetails/MovieDetails";
// import Helper from "./components/Helper/Helper";
// import Counter from "./components/Counter-useReducer/Counter";
// import Memo from "./components/Friends-useMemo/Memo";
function App() {
  return (
    <div className="App">
      <Navigation />
      <hr />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <Movies />
        </Route>
        <Route path="/movies/:moviesId">
          <MovieDetails />
        </Route>
        {/* <Route path="/link" exact>
          <Helper />
        </Route>
        <Route path="/counter">
          <Counter />
        </Route> */}

        <Route>
          <NotFoundView />
        </Route>
      </Switch>

      {/* <Route path=".link" component={Helper} /> */}

      {/* <Counter /> */}
      {/* <Memo /> */}
    </div>
  );
}

export default App;
