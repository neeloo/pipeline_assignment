import React from "react";
import { Handle, Position } from "reactflow";

export const OutputNode = ({ data }) => {

  return (
    <div style={{
      padding:10,
      border:"1px solid black",
      borderRadius:5,
      background:"white"
    }}>

      <Handle
        type="target"
        position={Position.Left}
        id="input"
      />

      <div>Output Node</div>

    </div>
  );
};