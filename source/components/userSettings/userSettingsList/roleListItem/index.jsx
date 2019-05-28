import React, { Component, Fragment } from 'react';

import styles from './index.sass';

import { store }from '../../../../store/userInfo/settingInfo'

import { userStore }from '../../../../store/userInfo/storeUser'

class UserSettingsListItem extends Component {
	constructor(props) {
		super(props);
		(this.state = {
			active: false
		}),
	//	(this.select = this.select.bind(this))
		(this.choose = this.choose.bind(this))
	}
	changeIndicate(){
		this.setState({
			active: !this.state.active
		})
	}	
	select(){		
		store.selectUser(this.props.id);
		this.changeIndicate();		
	}

	choose(){
		userStore.chooseUser(this.props.id)		
	}


	 render() {
			return (
						<tr className={styles.userSettingsListItem}>
							<td>
								
							<div onClick={this.select.bind(this)} className={this.state.active ? `${styles.statusActive} ${styles.status}` : styles.status}></div>
							</td>
							<td className={styles.username}>
								<p>Role XXX</p>
								<div className={styles.grad}></div>
							</td>
							<td>
							</td>							
							<td className={styles.circles}>
								<div className={styles.circles_item}><div>co</div></div>
								<div className={styles.circles_item}><div>pl</div></div>
								<div className={styles.circles_item}><div>ca</div></div>
								<div className={styles.circles_item}><div>st</div></div>
								<div className={styles.circles_item}><div>se</div></div>
							</td>

							<td>
							</td>
							<td>
							<div className={`${styles.status} `}></div>
							</td>
						</tr>
			)
	 }
} 
  
export default UserSettingsListItem;