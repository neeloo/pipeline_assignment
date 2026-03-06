import { useState } from "react"
import { Handle, Position } from "reactflow"

export const TextNode = ({ id }) => {

  const [text,setText] = useState("{{input}}")

  const variables = [...text.matchAll(/{{(.*?)}}/g)]

  return (

    <div style={{
      padding:10,
      border:"1px solid black",
      background:"white",
      minWidth:150
    }}>

      {variables.map((v,i)=>(
        <Handle
          key={i}
          type="target"
          position={Position.Left}
          id={v[1]}
          style={{top:30+(i*20)}}
        />
      ))}

      <textarea
        value={text}
        onChange={(e)=>setText(e.target.value)}
        style={{width:"100%"}}
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
      />

    </div>
  )
}