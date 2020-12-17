import React from "react";
import "./style.css";
import { Button } from "@material-ui/core";

export default function CodeContainer() {
  return (
    <div className="CodeContainer">
      我是文本编辑器
      <Button className="buttom" color="primary">
        Hello World
      </Button>
    </div>
  );
}
