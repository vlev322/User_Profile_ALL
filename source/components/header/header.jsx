import React, { Component, Fragment } from 'react';
//Our styles
import styles from './header.sass';
//Our stores
import { store } from "../../store/userInfo/settingInfo";
import { btnEditStore } from "../../store/userInfo/btnEditStore";
import  { formPersonal,formContact }  from "../../store/userProfileForm";


const sendAndClose = () => {
	formPersonal.store.toogleEditable();
	formContact.store.toogleEditable();
	store.save();
	store.back();
}
const onlySave = () => {
	store.save();
	formPersonal.store.toogleEditable()
	formContact.store.toogleEditable()
	btnEditStore.btnEditShow()
}

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showBtns: btnEditStore.getState().edit
		}
	}

	showBtn(state){
		let btns = 
			<div className={styles.header_r}>
				<span>Reset</span>
				<button onClick={onlySave} className={`${styles.btn} ${styles.btn_green}`}>Save Changes</button>
				<button onClick={sendAndClose} className={`${styles.btn} ${styles.btn_green}`}>Save & Close</button>
			</div>;
		return state ? btns : null;
	}
	componentDidMount() {
		btnEditStore.unsubscribe = btnEditStore.subscribe(()=>{
				this.setState({
				showBtns: btnEditStore.getState().edit
			});
		});
	}
	
  componentWillUnmount() {
		btnEditStore.unsubscribe()
	}
	
    render (){					
			return(
        <div className={styles.header}>
					<div className={styles.header_l}>
						<button onClick={store.back} className={`${styles.btn} ${styles.btn_black}`}>Back</button>
						<div className={styles.bio}>
							<h3>{this.props.nickname} {this.props.age}</h3>
							<span>{this.props.name}, {this.props.role}, {this.props.location}</span>
						</div>
					</div>
					{this.showBtn(this.state.showBtns)}
        </div>				
			)};
		}
export default Header;