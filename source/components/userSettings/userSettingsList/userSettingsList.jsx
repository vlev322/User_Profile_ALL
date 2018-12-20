import React from 'react';

import styles from './userSettingsList.sass';

import UserSettingsListItem from './userSettingsListItem/userSettingsListItem';

const UserSettingsList = props => {
		const {user} = props;
		
    return (
        <table className={styles.userSettingsList}>
					<thead>
						<tr className={styles.tableHead}>
							<th>
								<div className={`${styles.status} `}></div>
							</th>
							<th>Username</th>
							<th>Status</th>
							<th>Groups</th>
							<th>Roles</th>
							<th>Last Login</th>
						</tr>
					</thead>
					<tbody>
						{
							user.map((item)=>(
								<UserSettingsListItem
									key={item._id}
									id={item._id}
									nickname={item.userName}
									firstName={item.firstName}
									lastName={item.lastName}
									role='Content Manager'
									location='Vilnus Airport'
									lastLogin='2018-12-31 17:30:36'
									status='Active'
								/>
							))
						}
					</tbody>
        </table>
)};
  
export default UserSettingsList;
