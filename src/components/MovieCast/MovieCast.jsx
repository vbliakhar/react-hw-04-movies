import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as movieShellAPI from "../../services/movieShelf-api";
import ImageError from "../ImageError/ImageError";

const MovieCast = ({ movie }) => {
  const { moviesId } = useParams();
  const [actors, setActors] = useState(null);
  useEffect(() => {
    movieShellAPI
      .fetchMovieByActors(moviesId)
      .then((response) => {
        setActors(response.cast);
      })
      .catch((error) => {
        console.log("My error");
      });
  }, [moviesId]);
  return (
    <>
      {actors &&
        actors.map(({ profile_path, name, character, cast_id }) => {
          return (
            <li key={cast_id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${profile_path}`}
                  alt=""
                  width="150px"
                />
              ) : (
                <ImageError />
              )}

              <p>{name}</p>
              <p>Character: {character ? character : `not specified`}</p>
            </li>
          );
        })}
    </>
  );
};

export default MovieCast;
