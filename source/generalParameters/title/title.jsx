import React, { Component, Fragment } from 'react';
import styles from '../generalParameters.sass'



class Title extends Component {
	constructor(props) {
		super(props);
		this.state = props.store.getState()
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
	render(){		
	//	console.log(this.props.store);
		
    return (
      <div className={styles.subTitle}>
        <h3>{this.props.title}</h3>
        <div><a onClick={this.props.store.toogleEditable} href="#">{this.state.editable ? `Save` : `Edit`}</a></div>
    </div>
    );
	}
};
  
  export default Title;
