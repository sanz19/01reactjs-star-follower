import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ X: -20, Y: -20 });
  useEffect(() => {
    // console.log("effect", { enabled });
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ X: clientX, Y: clientY });
    };
    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <>
      <main>
        <div
          style={{
            backgroundImage: `url(https://img.icons8.com/3d-fluency/40/star.png)`,
            position: "absolute",
            // backgroundColor: "#D8A25E",
            // borderRadius: "50%",
            opacity: 0.8,
            pointerEvents: "none",
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.X}px,${position.Y}px)`,
          }}
        ></div>
        <button
          onClick={() => {
            setEnabled(!enabled);
          }}
        >
          {enabled ? "The traveler will return home" : "My star has left me"}
        </button>
      </main>
    </>
  );
}

export default App;
