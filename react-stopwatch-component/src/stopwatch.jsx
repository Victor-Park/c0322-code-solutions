import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      interval: null,
      playing: false
    };
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.reset = this.reset.bind(this);
  }

  play() {
    this.setState({
      interval: setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000),
      playing: true
    });
  }

  pause() {
    clearInterval(this.state.interval);
    this.setState({
      playing: false
    });
  }

  reset() {
    this.setState({
      count: 0
    });
  }

  render() {
    let icon;
    let action;
    let reset;
    if (this.state.playing) {
      icon = 'fa fa-pause';
      action = this.pause;
    } else {
      icon = 'fa fa-play';
      action = this.play;
      reset = this.reset;
    }
    return (
      <div className="stopwatch">
        <p className="counter" onClick={reset}>{this.state.count}</p>
        <i className={icon} onClick={action}></i>
      </div>
    );
  }
}

export default Stopwatch;
