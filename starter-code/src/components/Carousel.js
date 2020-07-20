import React, { Component } from "react";

class Carousel extends Component {
  state = { pic: 0 };

  handleLeft = () => {
    const picture = this.state.pic;
    if (picture <= 3 && picture > 0) {
      this.setState((prevState) => {
        return { pic: prevState.pic - 1 };
      });
    } else if (picture === 0) {
      this.setState((prevState) => {
        return { pic: 3 };
      });
    }
  };

  handleRight = () => {
    const picture = this.state.pic;
    if (picture < 3 && picture >= 0) {
      this.setState((prevState) => {
        return { pic: prevState.pic + 1 };
      });
    } else if (picture === 3) {
      this.setState((prevState) => {
        return { pic: 0 };
      });
    }
  };

  render() {
    const { pic } = this.state;
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "0",
              height: "0",
              borderTop: "30px solid transparent",
              borderBottom: "30px solid transparent",
              borderRight: "30px solid black",
            }}
            onClick={this.handleLeft}
          ></div>
          <img
            style={{ width: "250px", margin: "50px" }}
            src={this.props.imgs[`${pic}`]}
            alt="img"
          />
          <div
            style={{
              width: "0",
              height: "0",
              borderTop: "30px solid transparent",
              borderBottom: "30px solid transparent",
              borderLeft: "30px solid black",
            }}
            onClick={this.handleRight}
          ></div>
        </div>
      </div>
    );
  }
}

export default Carousel;
