import React from 'react';
import styles from '../generalParameters.sass'


const Title = props => {
    const {title} = props;
    return (
      <div className={styles.subTitle}>
        <h3>{title}</h3>
        <div><a href="#">Edit</a></div>
    </div>
    );
  };
  
  export default Title;
