// import PropTypes from "prop-types";
// API Key (v3 auth) 18f3850d2e2b26a030fc97b3b8448670
//Example API Request   https://api.themoviedb.org/3/movie/550?api_key=18f3850d2e2b26a030fc97b3b8448670
//API Read Access Token (v4 auth)eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGYzODUwZDJlMmIyNmEwMzBmYzk3YjNiODQ0ODY3MCIsInN1YiI6IjYxMmNkMjYwYTEzNTMzMDA4YjM4NmFkMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k7BpMix8gopfWVeFHgQHRjh9PlHCgUXPOatDdLg6dJQ

import { useState, useEffect } from "react";

const useLocalStorage = (valueName) => {
  const [state, setState] = useState(() => {
    return JSON.parse(window.localStorage.getItem(valueName ?? 0));
  });

  useEffect(() => {
    window.localStorage.setItem("text", JSON.stringify(state));
  }, [state]);
  return [state, setState];
};

const Helper = (props) => {
  const [text, setText] = useLocalStorage("text");
  const [input, setInput] = useState(" ");
  const handlerChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  return (
    <div>
      <input
        type="text"
        name="comment"
        onChange={handlerChange}
        value={input}
      />
      <button
        onClick={() => {
          setText((state) => state + 1);
          setInput(" ");
        }}
      >
        increment
      </button>
      <p>{text}</p>
      <p>{input}</p>
    </div>
  );
};

// Helper.propTypes = {};

export default Helper;
