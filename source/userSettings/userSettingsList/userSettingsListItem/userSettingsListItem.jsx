import React, { Component, Fragment } from 'react';

import styles from './userSettingsListItem.sass';

class UserSettingsListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}
	}
	clicked () {
		this.setState({ active: !this.state.active })
		console.log('click');
	}
	 render() {
			return (
						<tr className={styles.userSettingsListItem}>
							<td>
							<div onClick={this.clicked.bind(this)} className={this.state.active ? `${styles.statusActive} ${styles.status}` : styles.status}></div>
							</td>
							<td className={styles.username}>
								<p>{this.props.nickname}</p>
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