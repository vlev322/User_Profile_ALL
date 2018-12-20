import React, { Component, Fragment } from "react";

import axios from "axios";

import styles from "./UserSettings.sass";

import UserSettingsList from "./userSettingsList/userSettingsList";
import SectionBtn from "./sectionBtn/sectionBtn";

class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
  }

  componentDidMount() {this.dates();}

  dates() {
    axios
      .get(`http://185.233.117.46/api/v1/users/`)
      .then(
        function(response) {
          this.setState({
            userList: response.data
          });
        }.bind(this)
      ).catch(function(error) {
        console.log(error);
      });
  }
  render() {
    const { userList } = this.state;

    return userList.length ? (
      <div className={styles.userSettings}>
        <SectionBtn />
        <div className={styles.userSettingList}>
          <UserSettingsList user={userList} />
        </div>
      </div>
    ) : null;
  }
}

export default UserSettings;
