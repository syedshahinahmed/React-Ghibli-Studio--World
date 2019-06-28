import React from "react";
import Logo from "../logo.png";

const Movies = ({ flims }) => {
  return (
    <div className="root">
      <center>
        <img src={Logo} alt="Logo" />
      </center>
      <div className="container">
        {flims.map(movie => (
          <div className="card" key={movie.id}>
            <h1> {movie.title}</h1>
            <p>
              Description:{" "}
              {movie.description.length < 300
                ? `${movie.description}`
                : `${movie.description.substring(0, 300)}...`}
            </p>
            <p>Release : {movie.release_date}</p>
            <p>Director: {movie.director}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movies;
