import React, { useState } from "react";
import PipelineUI from "./ui/pipelineUI";
import Submit from "./submit";

function App() {

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  return (
    <div>

      <h1>Pipeline Builder</h1>

      <PipelineUI
        nodes={nodes}
        edges={edges}
        setNodes={setNodes}
        setEdges={setEdges}
      />

      <Submit nodes={nodes} edges={edges} />

    </div>
  );
}

export default App;