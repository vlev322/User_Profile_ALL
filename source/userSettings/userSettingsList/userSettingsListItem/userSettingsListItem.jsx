import React, { Component, Fragment } from 'react';

import styles from './userSettingsListItem.sass';

import { store }from '../../../store/userInfo/settingInfo'

import { userStore }from '../../../store/userInfo/storeUser'

class UserSettingsListItem extends Component {
	constructor(props) {
		super(props);
		(this.state = {
			active: false
		}),
		(this.select = this.select.bind(this))
		(this.choose = this.choose.bind(this))
	}

	select(){		
		store.selectUser(this.props.id)
	}
	choose(){
		userStore.chooseUser(this.props.id)
		
	}

	 render() {
			return (
						<tr className={styles.userSettingsListItem}>
							<td>
							<div onClick={this.select} className={this.state.active ? `${styles.statusActive} ${styles.status}` : styles.status}></div>
							</td>
							<td className={styles.username}>
								<p onClick={this.choose}>{this.props.nickname}</p>
								<span>Name: {this.props.firstName} {this.props.lastName}</span>
							</td>
							<td>
								<div className={`${styles.status} ${styles.statusActive}`}></div>
								<span>{this.props.status}</span>
							</td>
							<td>
								<p>{this.props.location}</p>
								<span>( 1 more.. )</span>
							</td>
							<td>
								<p>{this.props.role}</p>
								<span>( 2 more.. )</span>
							</td>
							<td>
								{this.props.lastLogin}
							</td>
							<td>
							<div className={`${styles.status} `}></div>
							</td>
						</tr>
			)
	 }
} 
  
export default UserSettingsListItem;