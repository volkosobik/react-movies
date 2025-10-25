import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "all",
  };
  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  handleChange = (event) => {
    this.setState({ type: event.target.dataset.type }),
      () => this.props.searchMovies(this.state.search, this.state.type);
  };
  render() {
    return (
      <>
        <div className="input-field">
          <input
            id="search"
            type="search"
            placeholder="search"
            className="validate"
            value={this.state.search}
            onChange={(event) => this.setState({ search: event.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="all"
              checked={this.state.type === "all"}
              onChange={this.handleChange}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              checked={this.state.type === "movie"}
              onChange={this.handleChange}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              data-type="series"
              checked={this.state.type === "series"}
              onChange={this.handleChange}
            />
            <span>Series only</span>
          </label>
        </div>
      </>
    );
  }
}

export { Search };
