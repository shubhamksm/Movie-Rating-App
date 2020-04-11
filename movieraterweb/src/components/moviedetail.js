import React from "react";
var FontAwesome = require("react-fontawesome");

class MovieDetail extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.movie ? (
          <div>
            <h3>{this.props.movie.title}</h3>
            <div>
              <FontAwesome
                name="star"
                className={this.props.movie.avg_rating > 0 ? "orange" : null}
              />
              <FontAwesome
                name="star"
                className={this.props.movie.avg_rating > 1 ? "orange" : null}
              />
              <FontAwesome
                name="star"
                className={this.props.movie.avg_rating > 2 ? "orange" : null}
              />
              <FontAwesome
                name="star"
                className={this.props.movie.avg_rating > 3 ? "orange" : null}
              />
              <FontAwesome
                name="star"
                className={this.props.movie.avg_rating > 4 ? "orange" : null}
              />
            </div>
            <p>{this.props.movie.description}</p>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default MovieDetail;
