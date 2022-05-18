import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    let button;
    const count = this.state.counter;
    if (count < 3) {
      button = <button onClick={this.handleClick}>Hot Button</button>;
    } else if (count >= 3 && count < 6) {
      button = <button onClick={this.handleClick} className="three-clicks">Hot Button</button>;
    } else if (count >= 6 && count < 9) {
      button = <button onClick={this.handleClick} className="six-clicks">Hot Button</button>;
    } else if (count >= 9 && count < 12) {
      button = <button onClick={this.handleClick} className="nine-clicks">Hot Button</button>;
    } else if (count >= 12 && count < 15) {
      button = <button onClick={this.handleClick} className="twelve-clicks">Hot Button</button>;
    } else if (count >= 15) {
      button = <button onClick={this.handleClick} className="fifteen-clicks">Hot Button</button>;
    }
    return <div>{button}</div>;
  }
}

export default HotButton;
