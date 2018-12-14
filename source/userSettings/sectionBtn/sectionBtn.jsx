import React, { Component, Fragment } from "react";

import styles from "./sectionBtn.sass";

import { store } from "../../store/userInfo/settingInfo";


class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
		};
  }

  render() {
    return  (
      <div className={styles.sectionBtn}>

        <div className={styles.sectionBtn_left}>
					<button>1000</button>
					<button>Properties</button>
					<button>Delete</button>
					<button>Approve</button>
					<button>Edit Multiple</button>
				</div>

        <div className={styles.sectionBtn_right}>
					<button onClick={store.createUser}>+ Create User</button>
				</div>
				
			</div>
		)
  }
}

export default UserSettings;
