import React from "react";
import { useState, useEffect } from "react";
import * as movieShellAPI from "../../services/movieShelf-api";
import { Link, useRouteMatch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Loader from "react-loader-spinner";
const HomePage = () => {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    console.log(location);
    movieShellAPI.fetchMovies().then((response) => {
      setMovies(response.results);
    });
  }, []);
  return (
    <div>
      <h1>Trending today</h1>
      <Loader
        type="Puff"
        color="green"
        height={80}
        width={80}
        style={{ textAlign: "center" }}
      />
      {movies &&
        movies.map(
          (movie) =>
            movie.title && (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `${url}movies/${movie.id}`,
                    state: { form: location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            )
        )}
    </div>
  );
};

export default HomePage;
