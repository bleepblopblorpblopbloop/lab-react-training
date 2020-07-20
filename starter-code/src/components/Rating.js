import React from "react";

const Rating = (props) => {
  const { children } = props;
  const starNum = Math.round(children);

  let stars;
  if (starNum === 0) {
    return (stars = <div>☆☆☆☆☆</div>);
  } else if (starNum === 1) {
    return (stars = <div>★☆☆☆☆</div>);
  } else if (starNum === 2) {
    return (stars = <div>★★☆☆☆</div>);
  } else if (starNum === 3) {
    return (stars = <div>★★★☆☆</div>);
  } else if (starNum === 4) {
    return (stars = <div>★★★★☆</div>);
  } else if (starNum === 5) {
    return (stars = <div>★★★★★</div>);
  }

  return (
    <div>
      <div>{stars}</div>
    </div>
  );
};

export default Rating;
