import React from "react";
import SearchBox from "./SearchBox";
import TubeList from "./TubeList";
import TubeDetail from "./TubeDetail";

const App = () => {
  return (
    <div className="ui container">
      <SearchBox />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <TubeDetail />
          </div>
          <div className="five wide column">
            <TubeList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
