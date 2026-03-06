export const DraggableNode = ({ type, label }) => {

  const onDragStart = (event, nodeType) => {

    const appData = { nodeType }

    event.target.style.cursor = "grabbing"

    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    )

    event.dataTransfer.effectAllowed = "move"
  }

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
      style={{
        cursor: "grab",
        minWidth: "80px",
        height: "60px",
        display: "flex",
        alignItems: "center",
        borderRadius: "8px",
        backgroundColor: "#1C2536",
        justifyContent: "center",
        color: "white"
      }}
    >
      {label}
    </div>
  )
}