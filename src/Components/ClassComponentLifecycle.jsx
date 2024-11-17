import React from "react";

class ClassComponentLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(),1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ time: new Date() });
  }

  render() {
    return <h1>Time: {this.state.time.toLocaleTimeString()}</h1>;
  }
}

export default ClassComponentLifecycle;
