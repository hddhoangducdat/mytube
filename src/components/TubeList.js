import React from "react";
import { connect } from "react-redux";
import { getTube } from "../actions";
import "./TubeList.css";

class TubeList extends React.Component {
  componentDidMount() {
    // this.props.getTube(this.props.tube[0]);
  }

  renderList() {
    if (this.props.tube !== undefined) {
      return this.props.tube.map(video => {
        return (
          <div
            onClick={() => this.getyourtube(video)}
            className="video-item item"
          >
            <img
              className="ui image"
              src={video.snippet.thumbnails.medium.url}
              alt=""
            />
            <div className="content">
              <div className="header">{video.snippet.title}</div>
            </div>
          </div>
        );
      });
    }
  }

  getyourtube = video => {
    this.props.getTube(video);
  };

  render() {
    if (this.props.tube) this.props.getTube(this.props.tube[0]);
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { search: state.search, tube: state.tube.items };
};

export default connect(
  mapStateToProps,
  { getTube }
)(TubeList);
