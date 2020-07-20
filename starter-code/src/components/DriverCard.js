import React from "react";

const DriverCard = (props) => {
  const { img, name, rating } = props;
  const { model, licensePlate } = props.car;
  //   const starNum = Math.round(rating);

  //   let stars;
  //   if (starNum === 0) {
  //     return (stars = <div>☆☆☆☆☆</div>);
  //   } else if (starNum === 1) {
  //     return (stars = <div>★☆☆☆☆</div>);
  //   } else if (starNum === 2) {
  //     return (stars = <div>★★☆☆☆</div>);
  //   } else if (starNum === 3) {
  //     return (stars = <div>★★★☆☆</div>);
  //   } else if (starNum === 4) {
  //     return (stars = <div>★★★★☆</div>);
  //   } else if (starNum === 5) {
  //     return (stars = <div>★★★★★</div>);
  //   }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flexStart",
        backgroundColor: "rgb(73, 95, 175)",
        borderRadius: "5px",
        margin: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "20px 0 20px 40vw",
        }}
      >
        <img
          src={img}
          alt="driver picture"
          style={{
            width: "100px",
            height: "100px",
            objectFit: "cover",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: "10px",
          }}
        >
          <div
            style={{
              margin: "5px 0",
              color: "white",
              fontSize: "1.5rem",
              fontWeight: "700",
            }}
          >
            {name}
          </div>
          <div style={{ margin: "5px 0", color: "white" }}>{rating}</div>
          <div style={{ margin: "5px 0", color: "white" }}>
            {model} - {licensePlate}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
