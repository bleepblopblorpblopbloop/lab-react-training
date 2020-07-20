import React from "react";

const Random = (props) => {
  const randomNumber = () => {
    let min = Math.ceil(props.min);
    let max = Math.floor(props.max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div style={{ border: "1px solid black", margin: "5px" }}>
      <h3 style={{ margin: "5px" }}>
        Random value between {props.min} and {props.max} = {randomNumber()}{" "}
      </h3>
    </div>
  );
};

export default Random;
