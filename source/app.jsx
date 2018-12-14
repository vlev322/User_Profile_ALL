import React, { Component, Fragment } from "react";

import styles from "./styles/main.sass";

import Header from "./header/header";
import GeneralParameters from "./generalParameters/generalParameters";
import Properties from "./properties/properties";
import UserSettings from "./userSettings/userSettings";

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
       	{this.changePage(this.state.pageName.pageName)}
      </Fragment>
    );
  }
}

export default App;