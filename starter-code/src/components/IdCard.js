import React from "react";

const IdCard = (props) => {
  const { picture, firstName, lastName, gender, height, birth } = props;

  const birthdate = (birth) => {
    return JSON.stringify(birth);
  };
  const newDate = new Date(birthdate);
  const readableDate = newDate.toDateString();

  return (
    <div style={{ border: "1px solid black", margin: "5px", display: "flex" }}>
      <img
        src={picture}
        alt={`${firstName} {lastName}`}
        style={{ margin: "5px" }}
      />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <p style={{ margin: "0" }}>
          <strong>First Name: </strong>
          {firstName}
        </p>
        <p style={{ margin: "0" }}>
          <strong>Last Name: </strong>
          {lastName}
        </p>
        <p style={{ margin: "0" }}>
          <strong>Gender: </strong>
          {gender}
        </p>
        <p style={{ margin: "0" }}>
          <strong>Height: </strong>
          {height}
        </p>
        <p style={{ margin: "0" }}>
          <strong>Birth: </strong>
          {readableDate}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
