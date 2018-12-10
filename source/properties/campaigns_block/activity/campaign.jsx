import React from 'react';

import styles from './campaign.sass';

const Properties = props => {
    const {name, period, status, placement} = props;
    return (
				<div className={styles.activity_item}>
						<div className={styles.activity_item_l} >
							<div>
								<span>Name</span>
								<span>Period</span>
							</div>
							<div>
								<p className={styles.time}>{name}</p>
								<p>{period}</p>
							</div>
						</div>

						<div className={styles.activity_item_r}>
							<div>
								<span>Status</span>
								<span>Placement</span>
							</div>
							<div>
								<p>{status}</p>
								<p>{placement}</p>
							</div>
							
						</div>
				</div>
)};
  
export default Properties;