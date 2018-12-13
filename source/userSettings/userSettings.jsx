import React, { Component, Fragment } from "react";

import axios from "axios";

import styles from "./UserSettings.sass";

import UserSettingsList from "./userSettingsList/userSettingsList";

import { store } from "../store/userInfo/settingInfo";


class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
		};
  }

  componentDidMount() {
		this.dates("5c0fbccf463e5e37b4a279c4", this);		
}

  dates() {
		axios
			.get(`http://192.168.10.3:3000/api/v1/user/`)
			.then(
				function(response) {
					this.setState({
						userList: response.data
					});
				}.bind(this)
			)
			.catch(function(error) {
				console.log(error);
			});
  }

  render() {
    const { userList } = this.state;

    return userList.length ? (
      <div className={styles.userSettings}>
        <button onClick={this.testClick}>Edit multiply User</button>
        <button onClick={store.createUser}>+Create User</button>
        <UserSettingsList
          user={userList}
          nickname="User XXX"
          name="Tom Toizer"
          status="Active"
          role="Content Manager"
          location="Vilnus Airport"
          lastLogin="2018-12-31 17:30:36"
        />
      </div>
    ) : null;
  }
}

export default UserSettings;
