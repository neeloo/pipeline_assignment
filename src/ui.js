import { useState, useRef, useCallback } from "react"
import ReactFlow, { Controls, Background, MiniMap } from "reactflow"
import "reactflow/dist/style.css"

import { useStore } from "./store"
import { shallow } from "zustand/shallow"

import { InputNode } from "./nodes/inputNode"
import { OutputNode } from "./nodes/outputNode"
import { LLMNode } from "./nodes/llmNode"
import { TextNode } from "./nodes/textNode"

const nodeTypes = {
  customInput: InputNode,
  customOutput: OutputNode,
  llm: LLMNode,
  text: TextNode
}

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  addNode: state.addNode,
  getNodeID: state.getNodeID,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect
})

export const PipelineUI = () => {

  const wrapper = useRef(null)

  const [rfInstance, setRfInstance] = useState(null)

  const {
    nodes,
    edges,
    addNode,
    getNodeID,
    onNodesChange,
    onEdgesChange,
    onConnect
  } = useStore(selector, shallow)

  const onDrop = useCallback((event) => {

    event.preventDefault()

    const bounds = wrapper.current.getBoundingClientRect()

    const data = JSON.parse(
      event.dataTransfer.getData("application/reactflow")
    )

    const position = rfInstance.project({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top
    })

    const id = getNodeID(data.nodeType)

    const newNode = {
      id,
      type: data.nodeType,
      position,
      data: { id }
    }

    addNode(newNode)

  }, [rfInstance])

  const onDragOver = (event) => {

    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }

  return (

    <div
      ref={wrapper}
      style={{ width: "100%", height: "70vh" }}
    >

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onInit={setRfInstance}
        nodeTypes={nodeTypes}
      >

        <Background />
        <Controls />
        <MiniMap />

      </ReactFlow>

    </div>
  )
}