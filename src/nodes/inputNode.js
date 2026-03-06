import { Handle, Position } from "reactflow"

export const InputNode = ({ id }) => {

  return (
    <div style={{
      padding:10,
      border:"1px solid black",
      background:"white"
    }}>

      Input

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-value`}
      />

    </div>
  )
}