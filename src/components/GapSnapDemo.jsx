import React, { useState } from "react";

function GapSnapDemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px", border: "2px solid #ddd", borderRadius: "10px" }}>
      <h2>Demo Component</h2>

      {/* Counter */}
      <p>Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)}
        style={{ padding: "10px 20px", marginBottom: "20px" }}
      >
        Increase Count
      </button>

      {/* Text input */}
      <div>
        <input
          type="text"
          placeholder="Type your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ padding: "10px", width: "60%", marginTop: "10px" }}
        />
        <p style={{ marginTop: "10px" }}>
          {name ? `Hello, ${name}!` : "Type something above"}
        </p>
      </div>
    </div>
  );
}

export default GapSnapDemo;