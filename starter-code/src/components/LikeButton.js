import React, { Component } from "react";

class LikeButton extends Component {
  state = { count: 0, bgColor: "" };

  randomColor = () => {
    return "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  };

  handleClick = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1, bgColor: this.randomColor() };
    });
  };

  render() {
    const { count, bgColor } = this.state;
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: "50px",
            width: "150px",
            border: "2px solid rgb(211,	200, 177)",
            margin: "10px",
            backgroundColor: `${bgColor}`,
          }}
          onClick={this.handleClick}
        >
          {count} {count === 1 ? <>Like</> : <>Likes</>}
        </div>
      </div>
    );
  }
}

export default LikeButton;
