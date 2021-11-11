import { useState, useEffect } from "react";
import * as movieShellAPI from "../../services/movieShelf-api";

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [handlerMovie, setHandlerMovie] = useState("");
  const [listMovies, setListMovies] = useState(null);
  useEffect(() => {
    movieShellAPI.fetchMovieBySearch(searchMovie).then((response) => {
      setListMovies(response.results);
      setHandlerMovie("");
    });
  }, [searchMovie]);
  const handlerName = (e) => {
    setHandlerMovie(e.currentTarget.value.toLowerCase());
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    if (handlerMovie.trim() === "") {
      return;
    }
    setSearchMovie(handlerMovie);
  };
  // console.log(handlerMovie);

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          name="bar"
          value={handlerMovie}
          placeholder="Search movies"
          onChange={handlerName}
        />
        <button type="submit">Search</button>
      </form>

      {listMovies &&
        listMovies.map(({ original_title, id }) => (
          <li key={id}>{original_title}</li>
        ))}
    </>
  );
};
export default Movies;
