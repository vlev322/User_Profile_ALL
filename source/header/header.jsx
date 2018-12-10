import React from 'react';

import styles from './header.sass';

const Header = props => {
    const {nickname, age, name, role, location, click} = props;
    return (
        <div className={styles.header}>
					<div className={styles.header_l}>
						<button className={`${styles.btn} ${styles.btn_black}`}>Back</button>
						<div className={styles.bio}>
							<h3>{nickname} {age}</h3>
							<span>{name}, {role}, {location}</span>
						</div>
					</div>
					<div className={styles.header_r}>
						<span>Reset</span>
						<button onClick={click} className={`${styles.btn} ${styles.btn_green}`}>Save Changes</button>
						<button className={`${styles.btn} ${styles.btn_green}`}>Save & Close</button>
					</div>
        </div>
)};
  
export default Header;