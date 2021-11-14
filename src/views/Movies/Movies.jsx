import { useState, useEffect } from "react";
import * as movieShellAPI from "../../services/movieShelf-api";
import { Link, useRouteMatch } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";

const Movies = () => {
  const [handlerMovie, setHandlerMovie] = useState("");
  const [listMovies, setListMovies] = useState(null);
  const [error, setError] = useState(null);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();

  const saveList = new URLSearchParams(location.search).get(`query`); //the current state of the URL term

  useEffect(() => {
    if (saveList) {
      console.log(location);
      movieShellAPI.fetchMovieBySearch(saveList).then((response) => {
        if (response.total_pages > 0) {
          setListMovies(response.results);
          setHandlerMovie("");
        } else {
          setError(saveList);
        }
      });
    }
  }, [saveList]);
  const handlerName = (e) => {
    setHandlerMovie(e.currentTarget.value.toLowerCase());
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    if (handlerMovie.trim() === "") {
      return;
    }
    history.push({
      ...location,
      search: `query=${handlerMovie}`,
    });
  };
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
      {error && (
        <>
          <p>Text not found</p>
          <h1>{error}</h1>
        </>
      )}

      {listMovies &&
        listMovies.map(({ original_title, id }) => (
          <li key={id}>
            <Link
              to={{
                pathname: `${url}/${id}`,
                state: { form: location },
              }}
            >
              {original_title}
            </Link>
          </li>
        ))}
    </>
  );
};
export default Movies;
