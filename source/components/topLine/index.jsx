import React, { Component } from 'react'

import styles from "./index.sass";


export class TopLineSearch extends Component {
	render() {
		return (
			<div className={styles.topLine}>
				<div>
					<div className={styles.circle}></div>
					<input type="search" name="" placeholder='Search for the specific data' id=""/>
				</div>
				<div>
					<span>Content Manager</span>				
					<div className={styles.circle}></div>
					<span>Logout</span>
				</div>

			</div>
		)
	}
}

export default TopLineSearch
