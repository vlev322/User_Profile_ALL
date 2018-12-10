import React, {Component, Fragment} from 'react';

import Activity from './activity/activity';
import Title from './title/title';

import styles from './activity_block.sass';

class Activity_block extends Component {
  render() {
    return (
      <div>
				<Title title='Activity'/>
					<div className={styles.content}>
						<div className={styles.activity}>
							<Activity
								time='17:25:15 17:12:2018'
								details='Laborum proident amet amet do adipisieiusmod.'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='Lorem itsdf sadf sadf asdf asdf asdf asfd asdf asfd'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='Lorem itsdf sadf sadf asdf asdf asdf asfd asdf asfd'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='Lorem itsdf sadf sadf asdf asdf asdf asfd asdf asfd'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='LorEu Lorem esse dolore in sint adipisicing id.Sunt in id veniam ea quis dolore nisi incididunt.'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='LorEu Lorem esse dolore in sint adipisicing id.Sunt in id veniam ea quis dolore nisi incididunt.'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='LorEu Lorem esse dolore in sint adipisicing id.Sunt in id veniam ea quis dolore nisi incididunt.'
								section='Campaigns'
							/>
							<Activity
								time='17:25:15 17:12:2018'
								details='LorEu Lorem esse dolore in sint adipisicing id.Sunt in id veniam ea quis dolore nisi incididunt.'
								section='Campaigns'
							/>
						</div>
						<div className={styles.gredient}></div>
					</div>


					
      </div>
    );
  }
}

export default Activity_block;
