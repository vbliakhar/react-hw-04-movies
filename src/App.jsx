import { Switch, Route } from "react-router-dom";
import "./App.scss";

import { lazy, Suspense } from "react";
import Navigation from "./components/Navigation/Navigation";

const HomePage = lazy(() =>
  import("./views/HomePage/HomePage.jsx" /*webpackChunkName: "HomePageLazy"*/)
);
const Movies = lazy(() =>
  import("./views/Movies/Movies.jsx" /*webpackChunkName: "MoviesLazy"*/)
);
const NotFoundView = lazy(() =>
  import("./views/NotFoundView.jsx" /*webpackChunkName: "NotFoundView"*/)
);
const MovieDetails = lazy(() =>
  import(
    "./components/MovieDetails/MovieDetails.jsx" /*webpackChunkName: "MovieDetails"*/
  )
);

// import Helper from "./components/Helper/Helper";
// import Counter from "./components/Counter-useReducer/Counter";
// import Memo from "./components/Friends-useMemo/Memo";
// Comment
function App() {
  return (
    <div className="App">
      <Navigation />
      <hr />
      <Suspense fallback={<h1>Loader ...</h1>}>
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

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
