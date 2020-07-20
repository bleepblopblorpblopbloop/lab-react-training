import React, { Component } from "react";

class NumbersTable extends Component {
  state = { limit: [] };

  componentDidMount = () => {
    this.setState(() => {
      return { limit: Array.from({ length: this.props.limit }, () => {}) };
    });
  };

  render() {
    const { limit } = this.state;
    console.log(limit);

    return (
      <div>
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {limit.map((el, i) => {
            console.log("test");
            if ((limit.indexOf(el) + 1) % 2 === 0) {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100px",
                    height: "100px",
                    border: "2px solid black",
                    marginLeft: "0px",
                    backgroundColor: "red",
                  }}
                >
                  {limit.indexOf(el) + 1}
                </div>
              );
            } else if ((limit.indexOf(el) + 1) % 2 != 0) {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100px",
                    height: "100px",
                    border: "2px solid black",
                    marginLeft: "0px",
                    backgroundColor: "white",
                  }}
                >
                  {limit.indexOf(el) + 1}
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}

export default NumbersTable;
