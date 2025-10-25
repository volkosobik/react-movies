import React from "react";

function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
    <div className="card movie" id={imdbID}>
      <div className="card-image waves-effect waves-block waves-light">
        <a href={"https://www.imdb.com/title/" + `${imdbID}`} target="_blank">
          <img className="activator" src={Poster} />
        </a>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {Title}
        </span>
        <p>
          {Year} <span className="right">{Type}</span>
        </p>
        <p>
          <a href={"https://www.imdb.com/title/" + `${imdbID}`} target="_blank">
            imdb link
          </a>
        </p>
      </div>
    </div>
  );
}

export { Movie };
