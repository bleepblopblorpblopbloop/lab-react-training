import React, { Component } from "react";

class Dice extends Component {
  state = { dice: this.props.diceSix };

  randomNumber = () => {
    let min = Math.ceil(1);
    let max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  handleClick = () => {
    const emptyDice = () => {
      return this.setState((state) => {
        return { dice: this.props.diceEmpty };
      });
    };
    const number = this.randomNumber();
    if (number === 1) {
      setTimeout(
        () => {
          this.setState((state) => {
            return { dice: this.props.diceOne };
          });
        },
        600,
        emptyDice()
      );
    } else if (number === 2) {
      setTimeout(
        () => {
          this.setState((state) => {
            return { dice: this.props.diceTwo };
          });
        },
        600,
        emptyDice()
      );
    } else if (number === 3) {
      setTimeout(
        () => {
          this.setState((state) => {
            return { dice: this.props.diceThree };
          });
        },
        600,
        emptyDice()
      );
    } else if (number === 4) {
      setTimeout(
        () => {
          this.setState((state) => {
            return { dice: this.props.diceFour };
          });
        },
        600,
        emptyDice()
      );
    } else if (number === 5) {
      setTimeout(
        () => {
          this.setState((state) => {
            return { dice: this.props.diceFive };
          });
        },
        600,
        emptyDice()
      );
    } else if (number === 6) {
      setTimeout(
        () => {
          this.setState((state) => {
            return { dice: this.props.diceSix };
          });
        },
        600,
        emptyDice()
      );
    }
  };

  render() {
    const { dice } = this.state;

    return (
      <div>
        <div>
          <img
            style={{ width: "250px", margin: "0 0 50px 50px" }}
            onClick={this.handleClick}
            src={dice}
            alt="dice"
          />
        </div>
      </div>
    );
  }
}

export default Dice;
