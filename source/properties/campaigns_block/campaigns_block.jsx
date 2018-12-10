import React, {Component, Fragment} from 'react';

import Campaign from './activity/campaign';
import Title from './title/title';

import styles from './campaigns_block.sass';

class Campaigns_block extends Component {
  render() {
    return (
      <div>
				<Title title='Campaigns'/>
						<div className={styles.content}>
							<div className={styles.campaign}>
							<Campaign
								name='Coca-cola Christmas'
								period='14.12.2018-31.12.2018'
								status='Working'
								placement='Placement XXX... ( 5 more )'
							/>
							<Campaign
								name='Coca-cola Christmas'
								period='14.12.2018-31.12.2018'
								status='Working'
								placement='Placement XXX... ( 5 more )'
							/>
							<Campaign
								name='Coca-cola Christmas'
								period='14.12.2018-31.12.2018'
								status='Working'
								placement='Placement XXX... ( 5 more )'
							/>
							<Campaign
								name='Coca-cola Christmas'
								period='14.12.2018-31.12.2018'
								status='Working'
								placement='Placement XXX... ( 5 more )'
							/>
							<Campaign
								name='Coca-cola Christmas'
								period='14.12.2018-31.12.2018'
								status='Working'
								placement='Placement XXX... ( 5 more )'
							/>
							<Campaign
								name='Coca-cola Christmas'
								period='14.12.2018-31.12.2018'
								status='Working'
								placement='Placement XXX... ( 5 more )'
							/>
						</div>
						<div className={styles.gredient}></div>
						</div>
      </div>
    );
  }
}

export default Campaigns_block;
