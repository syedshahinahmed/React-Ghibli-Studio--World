import React, { Component } from "react";
import Movies from "./components/Movies";
import Navigation from "./components/Navigation";
import Contact from "./components/Contact";

class App extends Component {
  // Setting The Initial State
  state = {
    flims: []
  };

  // Using Component Mount and Making Calls to API and Pulling Data
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      // fetch("https://ghibliapi.herokuapp.com/locations/")
      .then(res => res.json())
      .then(data => {
        this.setState({ flims: data });
        console.log(this.state.flims);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {/* <Navigation />
        <Movies flims={this.state.flims} /> */}
        <Contact />
      </div>
    );
  }
}

export default App;
