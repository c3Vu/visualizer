import TopBar from "./components/TopBar";
import "./App.css";
import CodeContainer from "./components/CodeContainer";
import BottomBar from "./components/BottomBar";
import VisualizerContainer from "./components/VisualizerContainer";

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
