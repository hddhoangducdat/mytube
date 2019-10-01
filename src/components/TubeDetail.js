import React from "react";
import { connect } from "react-redux";

const TubeDetail = ({ video }) => {
  console.log(video);
  if (video !== "undefinded") {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe title="video player" src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p className="description">{video.snippet.description}</p>
        </div>
      </div>
    );
  } else return <div>Loading...</div>;
};

const mapStateToProps = state => {
  return { video: state.video };
};

export default connect(mapStateToProps)(TubeDetail);
