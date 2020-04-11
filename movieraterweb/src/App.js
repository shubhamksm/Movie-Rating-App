import React from "react";
import "./App.css";
import MovieList from "./components/movielist";
import MovieDetail from "./components/moviedetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      selectedMovie: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/api/movies/", {
      method: "GET",
      headers: {
        Authorization: "Token 73026646ed510471a6bcf95145aeb7086b1dd405",
      },
    })
      .then((resp) => resp.json())
      .then((res) => this.setState({ movies: res }))
      .catch((error) => console.log(error));
  }

  onSelect = (movie) => {
    this.setState({ selectedMovie: movie });
  };

  render() {
    return (
      <div className="App">
        <h1>Movie Rater</h1>
        <div className="Layout">
          <MovieList movies={this.state.movies} onSelect={this.onSelect} />
          <MovieDetail movie={this.state.selectedMovie} />
        </div>
      </div>
    );
  }
}

export default App;
