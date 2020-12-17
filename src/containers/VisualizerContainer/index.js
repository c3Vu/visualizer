import React from "react";
import "./style.scss";

export default class VisualizerContainer extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.ctx = null;
    this.width = 0;
    this.height = 0;
  }
  componentDidMount() {
    if (this.canvasRef && this.canvasRef.current) {
      const rect = this.canvasRef.current.getBoundingClientRect();
      console.log(rect);
      this.width = rect.width;
      this.height = rect.height;
      this.ctx = this.canvasRef.current.getContext("2d");
      this.ctx.beginPath();
      this.ctx.moveTo(10, 20);
      this.ctx.lineTo(20, 40);
      this.ctx.lineTo(50, 30);
      this.ctx.fill();
      this.ctx.closePath();
    }
  }
  render() {
    return (
      <div className="VisualizerContainer">
        <canvas
          id="main-canvas"
          width={this.width}
          height={this.height}
          ref={this.canvasRef}
        />
      </div>
    );
  }
}
