import React, { Component, Fragment } from "react";
import axios from "axios";


import styles from "./sectionBtn.sass";

import { store } from "../../store/userInfo/settingInfo";
import { deleted } from "../../store/userInfo/deleteUser";
import { createUserStore } from "../../store/userInfo/createUserStore";


const createUser = () => {
	store.createUser();
	createUserStore.createNewUser();	
}

const deleteUser = () => {
	deleted.deleted('user')	
}

class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
		};
  }

	deleteObj (){
		axios
		.delete(
			` http://185.233.117.46/api/v1/user/`,
			{
				userDelete: store.getState().list
			}
		)				
			.catch(function(error) {
				console.log(error);
			});
	};

	componentDidMount() {	
    deleted.unsubscribe = deleted.subscribe(() => {	
					this.deleteObj();
					console.log('We deleted it..', store.getState().list.lenght);
					
    });
  }

  componentWillUnmount() {
    deleted.unsubscribe();
  }

  render() {
    return  (
      <div className={styles.sectionBtn}>

        <div className={styles.sectionBtn_left}>
					<button  className={styles.sectionBtn_left_first} >1000</button>
					
					{store.getState().list.length > 0 ? 
					<Fragment>
						<button>Properties</button>
						<button onClick={deleteUser} >Delete</button>
						<button>Approve</button>						
					</Fragment>
						: null}
					
					{store.getState().list.length > 1 ? <button>Edit Multiple</button> : null}					
				</div>

        <div className={styles.sectionBtn_right}>
					<button onClick={createUser}>+ Create User</button>
				</div>
				
			</div>
		)
  }
}

export default UserSettings;
