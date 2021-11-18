import React from "react";
import { useState, useEffect } from "react";
import * as movieShellAPI from "../../services/movieShelf-api";
import { Link, useRouteMatch } from "react-router-dom";
import { useLocation } from "react-router-dom";
import loader from "../../services/loader";
import "./HomePage.scss";
import ImageError from "../../components/ImageError/ImageError";

const HomePage = () => {
  const { url } = useRouteMatch();
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  const [isLoader, setLoader] = useState(false);

  useEffect(() => {
    setLoader((isLoading) => !isLoading);
    movieShellAPI
      .fetchMovies()
      .then((response) => {
        setMovies(response.results);
      })
      .finally(() => setLoader((isLoading) => !isLoading));
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center", textShadow: "2px 2px 2px #CE5937" }}>
        Trending today
      </h1>
      {isLoader && loader()}
      {movies && (
        <ul className="blockImg">
          {movies.map(
            (movie) =>
              movie.title && (
                <li key={movie.id}>
                  <Link
                    to={{
                      pathname: `${url}movies/${movie.id}`,
                      state: {
                        form: {
                          location,
                          label: "Home page",
                        },
                      },
                    }}
                  >
                    {movie.poster_path ? (
                      <img
                        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                        alt={movie.title}
                        width="186"
                      />
                    ) : (
                      <ImageError />
                    )}

                    {/* {movie.title} */}
                  </Link>
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
