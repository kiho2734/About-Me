import React from "react";
import "./styles/App.scss";
import Navbar from "./Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from "./Welcome";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Welcome />
      </BrowserRouter>
    );
  }
}

export default App;
