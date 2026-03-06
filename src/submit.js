import axios from "axios";

export default function Submit({ nodes, edges }) {

  const handleSubmit = async () => {

    const res = await axios.post("http://localhost:8080/pipeline_backend/parse", {
  nodes: nodes,
  edges: edges
});

    alert(
      "Nodes: " + res.data.num_nodes +
      "\nEdges: " + res.data.num_edges +
      "\nIs DAG: " + res.data.is_dag
    );
  };

  return (
    <button onClick={handleSubmit}>
      Submit Pipeline
    </button>
  );
}