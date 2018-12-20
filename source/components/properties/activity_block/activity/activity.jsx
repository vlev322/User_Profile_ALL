import React from 'react';

import styles from './activity.sass';

const Properties = props => {
    const {time, section, details} = props;
    return (
				<div className={styles.activity_item}>
						<div className={styles.activity_item_l} >
							<div>
								<span>Time</span>
								<span>Section</span>
							</div>
							<div>
								<p className={styles.time}>{time}</p>
								<p>{section}</p>
							</div>
						</div>

						<div className={styles.activity_item_r}>
							<div>
								<span>Details</span>
							</div>
							<div>
								<p>{details}</p>
							</div>
							
						</div>
				</div>
)};
  
export default Properties;