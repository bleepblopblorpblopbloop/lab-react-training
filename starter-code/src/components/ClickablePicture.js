import React, { Component } from "react";

class ClickablePicture extends Component {
  state = { toggledOn: true };

  handleClick = () => {
    this.setState((state) => {
      return { toggledOn: !state.toggledOn };
    });
  };

  render() {
    const { img, imgClicked } = this.props;
    const { toggledOn } = this.state;
    return (
      <div>
        <img
          onClick={this.handleClick}
          style={{ width: "250px", height: "auto", marginLeft: "50px" }}
          src={toggledOn ? img : imgClicked}
          alt="img"
        />
      </div>
    );
  }
}

export default ClickablePicture;
