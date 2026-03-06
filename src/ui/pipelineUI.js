import React from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

export default function PipelineUI({ nodes, edges, setNodes, setEdges }) {

  return (
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={setNodes}
        onEdgesChange={setEdges}
      />
    </div>
  );
}