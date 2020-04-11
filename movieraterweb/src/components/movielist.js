import React from "react";

class MovieList extends React.Component {
  onSelect = (movie) => (evt) => {
    this.props.onSelect(movie);
  };

  render() {
    return (
      <div>
        {this.props.movies.map((movie) => {
          return (
            <h3 key={movie.id} onClick={this.onSelect(movie)}>
              {movie.title}
            </h3>
          );
        })}
      </div>
    );
  }
}

export default MovieList;
