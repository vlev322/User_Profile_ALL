import React from 'react';
import styles from '../generalParameters.sass'

const Feild = props => {
    const {
      id,
      labelText,
      type,
      placeholder,
      value,
      name,
      onChange
    } = props;
    return (
      <div className={styles.formGroup}>
        <label htmlFor={id}>{labelText}</label>
        <input
          id={id}
          type={type}
          className="form-control"
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  };

export default Feild;