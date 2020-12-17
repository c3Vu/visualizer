import React from "react";
import TopBar from "./containers/TopBar";
import "./App.scss";
import CodeContainer from "./containers/CodeContainer";
import BottomBar from "./containers/BottomBar";
import VisualizerContainer from "./containers/VisualizerContainer";

function App() {
  return (
    <div className="App">
      <div className="TopContainer">
        <TopBar />
      </div>
      <div className="MiddleContainer">
        <div className="MiddleContainer_left">
          <CodeContainer />
        </div>
        <div className="MiddleContainer_right">
          <VisualizerContainer />
        </div>
      </div>
      <div className="BottomContainer">
        <BottomBar />
      </div>
    </div>
  );
}

export default App;
