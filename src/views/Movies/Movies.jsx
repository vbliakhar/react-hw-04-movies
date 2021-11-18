import { useState, useEffect } from "react";
import * as movieShellAPI from "../../services/movieShelf-api";
import { Link, useRouteMatch } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import ImageError from "../../components/ImageError/ImageError";
import "./Movies.scss";

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
      movieShellAPI.fetchMovieBySearch(saveList).then((response) => {
        if (response.total_pages > 0) {
          setListMovies(response.results);
          setHandlerMovie("");
        } else {
          setListMovies(null);
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
  //test
  return (
    <>
      <form onSubmit={handlerSubmit} className="formMovies">
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

      {listMovies && (
        <ul className="blockImg">
          {listMovies.map(({ original_title, id, poster_path }) => (
            <li key={id}>
              <Link
                to={{
                  pathname: `${url}/${id}`,
                  state: {
                    form: {
                      location,
                      label: "Search movies",
                    },
                  },
                }}
              >
                {poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                    alt={original_title}
                    width="186"
                  />
                ) : (
                  <ImageError />
                )}

                {/* {original_title} */}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Movies;
