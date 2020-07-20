import React from "react";

const CreditCard = (props) => {
  const cardType = (props) => {
    if (props.type === "Visa") {
      return <img src={props.logo} alt="Visa" />;
    } else if (props.type === "Master Card") {
      return <img src={props.logo} alt="Mastercard" />;
    }
  };

  const month = props.expirationMonth.toString().padStart(2, "0");
  const year = props.expirationYear.toString().slice(2);
  const cardMask = "••••  ••••  ••••  " + props.number.substring(12, 20);

  return (
    <div style={{ display: "flex", flexDirection: "row", maxWidth: "30vw" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "0px",
          borderRadius: "5px",
          backgroundColor: `${props.bgColor}`,
          height: "175px",
          width: "350px",
          maxWidth: "30vw",
          margin: "10px",
          color: `${props.color}`,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            padding: "10px",
            height: "20px",
            width: "auto",
          }}
        >
          {cardType(props)}
        </div>
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            fontSize: "24px",
            margin: "20px 0",
          }}
        >
          {cardMask}
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            fontSize: "14px",
            margin: "10px 0 0 15px",
          }}
        >
          <p style={{ margin: "0" }}>
            Expires {month}/{year}
          </p>
          <p style={{ margin: "0 0 0 20px" }}>{props.bank}</p>
        </div>
        <div>
          <p style={{ margin: "0 0 0 15px", fontSize: "14px" }}>
            {props.owner}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
