import React from "react";

function Display({ displayText }) {
  return (
    <div className="displayTextContainer">
      {/* Large text area-like container for displaying inputted text */}
      <div
        className="textArea"
        style={{
          width: "1000px",
          borderRadius: "10px",
          padding: "8px",
          border: "1px solid #ccc",
          whiteSpace: "pre-wrap",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {displayText.map((line, index) => (
          <div key={index}>
            <div className="card" style={{ backgroundColor: line.backgroundColor, color: "white" }}>
              <div className="card-body">{line.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Display;
