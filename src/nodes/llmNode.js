import { Handle, Position } from "reactflow"

export const LLMNode = ({ id }) => {

  return (
    <div style={{
      padding:10,
      border:"1px solid black",
      background:"white"
    }}>

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
      />

      LLM

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />

    </div>
  )
}