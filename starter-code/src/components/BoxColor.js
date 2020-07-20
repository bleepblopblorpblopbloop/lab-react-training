import React from "react";

const BoxColor = (props) => {
  const { r, g, b } = props;
  return (
    <div style={{ border: "2px solid black", margin: "5px" }}>
      <h3
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0",
          height: "150px",
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          fontSize: "30px",
          fontWeight: "300",
          color: "white",
        }}
      >
        rgb({r}, {g}, {b})
      </h3>
    </div>
  );
};

export default BoxColor;
