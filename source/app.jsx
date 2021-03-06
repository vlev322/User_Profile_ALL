import React, { Component, Fragment } from "react";

import styles from "./styles/main.sass";

import Header from "./components/header/header";
import GeneralParameters from "./components/generalParameters/generalParameters";
import Properties from "./components/properties/properties";
import UserSettings from "./components/userSettings/userSettings";
import Welcome from "./components/welcome-page";

import { store } from "./store/userInfo/settingInfo";

import { userStore } from "./store/userInfo/storeUser";


class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
				manageSettingsBlock: 'userList',
				pageName: store.getState(),
				editMultiplyUser: false
    }
	}
	changePage(page){
		let genParam =
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
					<GeneralParameters />
					<Properties />
				</div>
			</Fragment>

		let settings = <UserSettings />;
			switch (page) {
				case 'genParam':
					return genParam;
				case 'userList':
					return settings;			
				default:
					break;
			}
	}
	componentDidMount() {
		store.unsubscribe = store.subscribe(()=>{
			this.setState({
				pageName: store.getState()
			});
		});
		userStore.unsubscribe = userStore.subscribe(()=>{
			store.editUser()	
		})
	}
	
  componentWillUnmount() {
		store.unsubscribe()
		userStore.unsubscribe()
  }

  render() {		
    return (
      <Fragment>
       	<Welcome></Welcome>
      </Fragment>
    );
  }
}

export default App;