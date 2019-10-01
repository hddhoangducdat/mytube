import React from "react";
import { fetchSearch, fetchTube } from "../actions";
import { connect } from "react-redux";

class SearchBox extends React.Component {
  componentDidMount() {
    this.props.fetchTube(this.props.text);
  }
  onChangeText = event => {
    this.props.fetchSearch(event.target.value);
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.fetchTube(this.props.text);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSubmit} className="ui form">
          <div className="field">
            <input
              onChange={this.onChangeText}
              type="text"
              placeholder="Search your tube ..."
            />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { text: state.search };
};

export default connect(
  mapStateToProps,
  { fetchSearch, fetchTube }
)(SearchBox);
