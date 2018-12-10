import React, { Component, Fragment } from "react";

import styles from "./styles/main.sass";

import Header from "./header/header";
import GeneralParameters from "./generalParameters/generalParameters";
import Properties from "./properties/properties";

class App extends Component {
		constructor(props) {
			super(props);
			this.state = {
				sendBtn: false
		},
		this.click = this.click.bind(this)
	}

	click(){
			this.setState({
				sendBtn: !this.state.sendBtn
			})
	}

	// btn(){
	// 	console.log('BTN');
	// }

  render() {
    return (
      <Fragment>
        <Header
          nickname="User"
          age="22"
          name="Tom Toizer"
          role="Content Manager"
					location="Vilnius"
					click={this.click}
        />
        <div className={styles.content}>
          <GeneralParameters 
						saveBtn={this.state.sendBtn}
						// test={this.btn()}
					/>
          <Properties />
        </div>
      </Fragment>
    );
  }
}

export default App;
