import React from "react";

const Greetings = (props) => {
  const language = { de: "Hallo", fr: "Bonjour", es: "Hola", en: "Hello" };

  return (
    <div style={{ border: "1px solid black", margin: "5px" }}>
      {""}
      <h3 style={{ margin: "5px" }}>
        {language[props.lang]} {props.name}
      </h3>
    </div>
  );
};

export default Greetings;
