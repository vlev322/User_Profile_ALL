import React, { Component, Fragment } from "react";

import axios from "axios";

//Our stores
import { formPersonal, formContact } from "../../store/userProfileForm";
import { store } from "../../store/userInfo/settingInfo";
import { createUserStore } from "../../store/userInfo/createUserStore";
import { userStore } from "../../store/userInfo/storeUser";
import { displayListRoles, store as dispListRolStore, hide } from "../../store/userInfo/dropdownStore";
//Our styles
import styles from "./generalParameters.sass";
//Our components
import Field from "./field/field";
import Title from "./title/title";

import { dates,changeUserInfo, get_Data, saveChanges } from "../../controllers/gettinData";

class GeneralParameters extends Component {
  constructor(props) {
    super(props);
    (this.state = {
      username: "",
      firstname: "",
      secondname: "",
      password: "",
      email: "",
      phone: "",
      visitaddr: "",
			saveBtn: this.props.saveBtn,
			rolesList: []
			
    }),
      (this.handleChange = this.handleChange.bind(this))
      // (this.saveChanges = this.saveChanges.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {

		dates(userStore.getState().user, this);
		
		get_Data(userStore.getState().user, this);
		
    store.unsubscribe = store.subscribe(() => {
      saveChanges(self);
		});
		
    dispListRolStore.unsubscribe = dispListRolStore.subscribe(() => {
			this.setState(
				this.state
			)
    });		
		
    userStore.unsubscribe = userStore.subscribe(() => {
			changeUserInfo("edit", this);
			console.log('SubscriBE---->>>> EDIT');
			
		});
		
    createUserStore.unsubscribe = createUserStore.subscribe(() => {
			changeUserInfo("create", this);
			console.log('SubscriBE---->>>> CREATE');
			
		});		
	}

  componentWillUnmount() {
    store.unsubscribe();
    userStore.unsubscribe();
    dispListRolStore.unsubscribe();
    createUserStore.unsubscribe();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
	}
	
  render() {
	const dropdownListItem = (item) => (
		<div className={styles.dropdownList_item}>
			<p>{item}</p>
			<div></div>
		</div>
	);
	  return (
      <div className={styles.generalParameters}>
        <div className={styles.title}>
          <h2>General Parameters</h2>
          <span>Secure Connection</span>
        </div>
        <div className={styles.personal}>
          <Title store={formPersonal.store} title="Personal Information" />
          <div className={styles.names}>
            <img src="https://randomuser.me/api/portraits/men/46.jpg" />
            <form onSubmit={this.handleSubmit}>
              <Field store={formPersonal.field[0]} />
              <Field store={formPersonal.field[1]} />
              <Field store={formPersonal.field[2]} />
              <Field store={formPersonal.field[3]} />
            </form>
          </div>
        </div>

        <div className={styles.contact}>
          <Title store={formContact.store} title="Contact Information" />
          <div className={styles.contacts}>
            <form onSubmit={this.handleSubmit}>
              <Field store={formContact.field[0]} />
              <Field store={formContact.field[1]} />
              <div className={styles.formGroup}>
                <label htmlFor="visitaddr">Visiting address</label>
                <textarea
                  id="visitaddr"
                  placeholder="Enter address"
                  name="visitaddr"
                  value={this.state.visitaddr}
                  onChange={this.handleChange}
                />
              </div>
            </form>
          </div>
        </div>

        <div>
          <Title store={formContact.store} title="Setting Information" />
          <div className={styles.settingInformation}>
            <div>
              <div className={styles.roles}>
                <span className={styles.subTitle}>Roles</span>
                <div>
                  <section className={styles.rolesItem}>
                    <i>&#10006; </i><span>Vilnius Airport</span>
                    <i>&#10006; </i><span>Content Manager</span>
                  </section>
									<input
										onBlur={hide}
										onChange={(e)=>{											
											displayListRoles(e.target.value)
										}}
                    type="text"
										id="inputRoles"
										className={styles.inputRoles}
                    placeholder="Select role"
                  />
									{ <div id="dropdownList" className={styles.dropdownList}>
										{dispListRolStore.getState().result.map((item)=>(dropdownListItem(item)))}
									</div>}
                </div>
              </div>
              <div className={styles.group}>
                <span className={styles.subTitle}>Group</span>
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GeneralParameters;
