import { Handle, Position } from "reactflow"

export const OutputNode = ({ id }) => {

  return (
    <div style={{
      padding:10,
      border:"1px solid black",
      background:"white"
    }}>

      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-value`}
      />

      Output

    </div>
  )
}