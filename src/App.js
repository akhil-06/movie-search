import React, { useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";

function App() {
  const [movie,setMovie] = useState([]);

  const fetchMovie = () => {
    axios
      .get("https://www.omdbapi.com/?s=kabhi&apikey=c5c3ec1d")
      .then((response) => {
        // console.log(response);
        setMovie(response.data.Search);
      });
  };
  return (
    <>
      <div className="App">
        <Navbar/>
        {/* <button onClick={fetchMovie}>Fetch Movies</button>
        {movie.map((value, index) => {
          return <h3>{value.Title}</h3>;
        })} */}
      </div>
    </>
  );
}

export default App;
