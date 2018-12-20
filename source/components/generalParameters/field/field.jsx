import React, { Component } from "react";
import styles from "../generalParameters.sass";

export default class Field extends Component {
  constructor(props) {
		super(props);
		this.state = props.store.getState();
		this.unsubscribe = () => {};
	}
	
	componentDidMount() {
		const { store } = this.props;
		this.unsubscribe = store.subscribe(() => {
			this.setState( store.getState() );
		});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

  render() {
    const { labelText, type, placeholder, value, name, readonly } = this.state;
    const { changeValue } = this.props.store;
    return (
      <div className={styles.formGroup}>
        <label htmlFor={name}>{labelText}</label>
        <input
          id={name}
          type={type}
          className="form-control"
          placeholder={placeholder}
          name={name}
          value={value}
					onChange={changeValue}
					readOnly={readonly}
        />
      </div>
    );
  }
}
