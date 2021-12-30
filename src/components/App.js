import React from "react";
import "./styles/App.scss";
import Navbar from "./Navbar";
import Welcome from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Navbar />
        <Welcome />
      </div>
    );
  }
}

export default App;
