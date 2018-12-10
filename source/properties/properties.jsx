import React from 'react';

import styles from './properties.sass';

import Activity_block from './activity_block/activity_block'
import Campaigns_block from './campaigns_block/campaigns_block'

const Properties = props => {
    const {} = props;
    return (
        <div className={styles.properties}>
						<Activity_block />
						<Campaigns_block />
        </div>
)};
  
export default Properties;