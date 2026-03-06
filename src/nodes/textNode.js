import React, { useState } from "react";
import { Handle, Position } from "reactflow";

export const TextNode = ({ data }) => {

  const [text, setText] = useState("");

  return (
    <div style={{
      padding:10,
      border:"1px solid black",
      borderRadius:5,
      background:"#e6f7ff"
    }}>

      <Handle
        type="target"
        position={Position.Left}
      />

      <div>Text Node</div>

      <textarea
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder="Enter text..."
        style={{width:150}}
      />

      <Handle
        type="source"
        position={Position.Right}
      />

    </div>
  );
};