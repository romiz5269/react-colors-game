function Game({ color }) {
  return (
    <div className="colors-grid">
      <div
        className="color-cell"
        key={color.id}
        style={
          color.matched
            ? { backgroundColor: color.color }
            : { backgroundColor: "white" }
        }
      ></div>
    </div>
  );
}

export default Game;
