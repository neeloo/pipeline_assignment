import React from "react";
import { Handle, Position } from "reactflow";

export const InputNode = ({ data }) => {

  return (
    <div style={{
      padding:10,
      border:"1px solid black",
      borderRadius:5,
      background:"white"
    }}>

      <div>Input Node</div>

      <Handle
        type="source"
        position={Position.Right}
        id="output"
      />

    </div>
  );
};