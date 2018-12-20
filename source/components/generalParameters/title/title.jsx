import React, { Component, Fragment } from 'react';
//Our styles
import styles from '../generalParameters.sass'
//Our stores
import { btnEditStore } from "../../../store/userInfo/btnEditStore";
class Title extends Component {
	constructor(props) {
		super(props);
		(this.state = props.store.getState()),
		this.unsubscribe = () => {},
		(this.showBtn = this.showBtn.bind(this))
	}

	showBtn(){
		btnEditStore.btnEdit();
		this.props.store.toogleEditable()		
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
	render(){		
    return (
      <div className={styles.subTitle}>
        <h3>{this.props.title}</h3>
        <div><a onClick={this.showBtn}>{this.state.editable ? `Save` : `Edit`}</a></div>
    </div>
    );
	}
};
  
  export default Title;
