import React from "react";
import { useState, useEffect } from "react";
import * as movieShellAPI from "../../services/movieShelf-api";
import loader from "../../services/loader";
import "./HomePage.scss";
import ListMovie from "../../components/ListMovie/ListMovie";

const HomePage = () => {
  const [movies, setMovies] = useState(null);
  const [isLoader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    setLoader((isLoading) => !isLoading);
    movieShellAPI
      .fetchMovies(page)
      .then((response) => {
        setMovies(response);
      })
      .finally(() => {
        setLoader((isLoading) => !isLoading);
      });
  }, [page]);
  const onChangePage = (page) => {
    setPage(page);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", textShadow: "2px 2px 2px #CE5937" }}>
        Trending today
      </h1>
      {isLoader && loader()}
      {movies && (
        <>
          <ListMovie
            movies={movies.results}
            currentPage={movies.page}
            count={movies.total_pages}
            onChangePage={onChangePage}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
