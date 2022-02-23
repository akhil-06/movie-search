import React, { useState } from "react";
import axios from "axios";

function Navbar() {
  const [movie, setMovie] = useState([]);
  const [text, setText] = useState("Search Movie");
  const changeText = (event) => {
    // console.log(event);
    setText(event.target.value);
  };

  const getMovie = (e) => {
    e.preventDefault();

    axios
      .get(`https://www.omdbapi.com/?s=${text}&apikey=c5c3ec1d`)
      .then((response) => {
        // console.log(response.data.Search);
        setMovie(response.data.Search);
      });
  };
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <form className="d-flex" onClick={getMovie}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={text}
              onChange={changeText}
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>

      <div className="container my-3">
        <div className="row">
          {movie.map((value, index) => {
            return (
              <div className="col-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={value.Poster}
                    className="card-img-top"
                    alt={value.Title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{value.Year}</h5>
                    <h4 className="card-text">{value.Title}</h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
