import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      test: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleTest = this.handleTest.bind(this);
  }

  handleChange(event) {
    this.setState({ value: this.state.value + 1 });
  }

  handleTest(event) {
    if (this.state.value === 0) {
      this.setState({ state: false });
    } else if (this.state.value < 8) {
      this.setState({ state: true });
    }
  }

  render() {
    let errmsg;
    let checkmark;
    if (this.state.value === 0) {
      errmsg = 'A password is required.';
      checkmark = 'fa-solid fa-x';
    } else if (this.state.value < 8) {
      errmsg = 'Your password is too short.';
      checkmark = 'fa-solid fa-x';
    } else {
      checkmark = 'fa-solid fa-check';
    }
    return (
        <form onChange={this.handleTest}>
          <p>Password</p>
          <label onChange={this.handleChange} className="label">
            <input className="input"></input>
          </label>
            <i className={checkmark}></i>
            <p className="errmsg">{errmsg}</p>
        </form>
    );
  }
}

export default Input;
