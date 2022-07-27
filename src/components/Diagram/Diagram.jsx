import React from "react";
import DiagramBar from "./DiagramBar";
import "./Diagram.css";

export default function Diagram(props) {
  return (
    <div className="diagram">
      {props.dataSets.map((dataSet) => (
        <DiagramBar
          key={dataSet.label}
          value={dataSet.value}
          maxValue={null}
          label={dataSet.label}
        />
      ))}
    </div>
  );
}
