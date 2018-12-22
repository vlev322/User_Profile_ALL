import React, { Component, Fragment } from "react";

import styles from "./styles/main.sass";

import { Welcome } from "./components/welcome-page";
import { Calendar } from "./components/calendar";


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {}
	}

  render() {		
    return (
			<Calendar/>
    );
  }
}

export default App;