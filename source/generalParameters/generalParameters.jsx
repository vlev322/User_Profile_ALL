import React, { Component, Fragment } from "react";

import axios from "axios";

//Our stores
import {formPersonal,formContact} from "./../store/userProfileForm";
import { store } from "../store/userInfo/settingInfo";
import { userStore } from "../store/userInfo/storeUser";
//Our styles
import styles from "./generalParameters.sass";
//Our components
import Field from "./field/field";
import Title from "./title/title";

const clear = state => {
  state.setState({
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
  if (usersEdit === "create") clear();
  else if (usersEdit === "edit") {
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
    .get(`http://192.168.10.3:3000/api/v1/user/${userId}`)
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
    }).then(()=>{
			changeUserInfo('edit', self);
		})
    .catch(function(error) {
      console.log(error);
		});
		
};

const get_Data = () => {
  let dataList = document.getElementById("json-datalist");
  axios
    .get(`http://192.168.10.3:3000/api/v1/user/5c0fbccf463e5e37b4a279c4`)
    .then(function(response) {
      const roles = response.data.roles;
      roles.forEach(function(item) {
        // Создаем новый элемент <option>.
        let option = document.createElement("option");
        // Устанавливаем значение, используя элементы массива JSON.
        option.value = item;
        // Добавляем элемент <option> к <datalist>.
        dataList.appendChild(option);
      });
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
      saveBtn: this.props.saveBtn
    }),
      (this.handleChange = this.handleChange.bind(this)),
      (this.saveChanges = this.saveChanges.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
  }

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
            ` http://192.168.10.3:3000/api/v1/user/5c0fbccf463e5e37b4a279c4`,
            {
              _id: "5c0fbccf463e5e37b4a279c4",
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
		get_Data();
		
    store.unsubscribe = store.subscribe(() => {
			this.saveChanges();				
		});

		userStore.unsubscribe = userStore.subscribe(()=>{
			changeUserInfo('edit', this);
		})
	}
	
  componentWillUnmount() {
		store.unsubscribe()
		userStore.unsubscribe();		
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  render() {
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
                <span>Roles</span>
                <div>
                  <input
                    type="text"
                    id="ajax"
                    list="json-datalist"
                    placeholder="Select role"
                  />
                  <datalist id="json-datalist" />
                </div>
              </div>
              <div className={styles.group}>
                <span>Group</span>
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
