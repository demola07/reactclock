import React from "react";
import "./App.css";
import Clock from "./components/clock";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  render() {
    return (
      <div className="App-header">
        <Clock />
      </div>
    );
  }
}

export default App;
