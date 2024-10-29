import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const App = () => {
  const arr = [1, 2, 3, 4, 5];

  const [star, setStar] = useState(0);
  const [hoveredStar,setHoveredStar] = useState(0)

  function handleState(id) {
    setStar(id);
  }

  return (
    <>
      <div id="star">
        {arr.map((id) => (
          <AiFillStar
            key={id}
            onClick={() => handleState(id)}
            onMouseEnter={() => setHoveredStar(id)}
            onMouseLeave={() => setHoveredStar(0)}
            style={{
              color: id <= (hoveredStar || star) ? "black" : "lightgray",
              cursor: "pointer"
            }}
            />
        ))}
      </div>
    </>
  );
};

export default App;
