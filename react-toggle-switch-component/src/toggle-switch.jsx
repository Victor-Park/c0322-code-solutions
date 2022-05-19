import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.toggleOn = this.toggleOn.bind(this);
    this.toggleOff = this.toggleOff.bind(this);
    this.state = { toggleOn: false };
  }

  toggleOn() {
    this.setState({ toggleOn: false });
  }

  toggleOff() {
    this.setState({ toggleOn: true });
  }

  render() {
    const toggleOn = this.state.toggleOn;
    if (toggleOn) {
      return (
      <div>
       <input className="toggle" type="checkbox" onChange={this.toggleOn} />
        <label className="label">ON</label>
      </div>
      );
    } else {
      return (
      <div>
        <input className="toggle" type="checkbox" onChange={this.toggleOff} />
        <label className="label">OFF</label>
      </div>
      );
    }
  }
}

export default ToggleSwitch;
