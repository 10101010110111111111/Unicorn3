import { useState } from "react";

function Button() {
  const [clicked, setClicked] = useState(false);

  const handleDoubleClick = (e) => {
    setClicked((prev) => !prev);
  };

  return (
    <button className="crazy-button" onDoubleClick={handleDoubleClick}>
      {clicked ? "OUCH!" : "Click me!"}
    </button>
  );
}

export default Button;