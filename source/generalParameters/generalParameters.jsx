import React, { Component, Fragment } from "react";

import axios from "axios";

//Our stores
import { formPersonal, formContact } from "./../store/userProfileForm";
import { store } from "../store/userInfo/settingInfo";
import { createUserStore } from "../store/userInfo/createUserStore";
import { userStore } from "../store/userInfo/storeUser";
import { displayListRoles, store as dispListRolStore, hide } from "../store/userInfo/dropdownStore";
//Our styles
import styles from "./generalParameters.sass";
//Our components
import Field from "./field/field";
import Title from "./title/title";

const clear = self => {
  self.setState({
    username: "",
    firstname: "",
    secondname: "",
    password: "",
    email: "",
    phone: "",
    visitaddr: ""
	});
	
};
const changeUserInfo = (usersEdit, self) => {
  if (usersEdit === "create") {
		clear(self)		
	}else if (usersEdit === "edit") {
    formPersonal.field[0].gettingData(self.state.username);
    formPersonal.field[1].gettingData(self.state.firstname);
    formPersonal.field[2].gettingData(self.state.secondname);
    formPersonal.field[3].gettingData(self.state.password);
    formContact.field[0].gettingData(self.state.email);
    formContact.field[1].gettingData(self.state.phone);
  }
};

const dates = (userId, self) => {
  axios
    .get(`http://185.233.117.46/api/v1/user/${userId}`)
    .then(function(response) {
      const user = response.data;
      self.setState({
        username: user.userName,
        firstname: user.firstName,
        secondname: user.lastName,
        password: user.password,
        email: user.email,
        phone: user.telephone,
        visitaddr: user.visitingAdress
      });
    })
    .then(() => {
      changeUserInfo("edit", self);
    })
    .catch(function(error) {
      console.log(error);
    });
};

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
      (this.handleChange = this.handleChange.bind(this)),
      (this.saveChanges = this.saveChanges.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
  }

//---Получаем наши роли с сервера и передаем их в переменную состояния rolesList
	get_Data (id){
		  axios
		    .get(`http://185.233.117.46/api/v1/user/${id}`)
		    .then(function(response) {
					this.setState({
						rolesList: response.data.roles
					})
					// console.log('Our Selection' ,this.selection());

				}.bind(this))				
		    .catch(function(error) {
		      console.log(error);
		    });
		};
	
  saveChanges() {
    const user = {};
    let saveData = () => {
      return new Promise(function(resolve, reject) {
        formPersonal.field.map(elem => {
          user[elem.name] = elem.getState().value;
        });
        formContact.field.map(elem => {
          user[elem.name] = elem.getState().value;
        });
        resolve("success");
      });
    };

    saveData().then(
      function(response) {
        axios
          .put(
            ` http://185.233.117.46/api/v1/user/${userStore.getState().user}`,
            {
              _id: userStore.getState().user,
              userName: user.username,
              firstName: user.firstname,
              lastName: user.secondname,
              password: user.password,
              email: user.email,
              telephone: user.phone,
              visitingAdress: user.visitingAdress
            }
          )
          .catch(function(error) {
            console.log(error);
          });
      }.bind(this)
    );
	}
	
  componentDidMount() {

    dates(userStore.getState().user, this);
		this.get_Data(userStore.getState().user);
		
    store.unsubscribe = store.subscribe(() => {
      this.saveChanges();
		});
		
    dispListRolStore.unsubscribe = dispListRolStore.subscribe(() => {
			this.setState(
				this.state
			)
    });		
		
    userStore.unsubscribe = userStore.subscribe(() => {
      changeUserInfo("edit", this);
		});
		
    createUserStore.unsubscribe = createUserStore.subscribe(() => {
      changeUserInfo("create", this);
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
