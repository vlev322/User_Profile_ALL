import React, { Component, Fragment } from "react";
import axios from "axios";

import { formPersonal, formContact } from "./../store/userProfileForm";

import styles from "./generalParameters.sass";

import Field from "./field/field";
import Title from "./title/title";

const dates = (userId, self) => {
  axios
    .get(`http://192.168.10.3:3000/api/v1/user/${userId}`)
    .then(function(response) {
      const user = response.data;
      self.setState({
        username: user.login,
        firstname: user.firstName,
        secondname: user.secondName,
        password: user.password,
        email: user.email,
        phone: user.telephone,
        visitaddr: user.visitingAdress
      });
    })
    .catch(function(error) {
      console.log(error);
    });
};

const saveChanges = () => {
  const user = {};
  formPersonal.field.map(elem => {
    user[elem.name] = elem.getState();
  });
  // const contacts = {};
  // formContact.field.map((elem) => {
  // 	contacts[elem.name] = elem.getState()
  // })
  axios
    .put(` http://192.168.10.3:3000/api/v1/user/5c0fbccf463e5e37b4a279c4`, {
      _id: "5c0fbccf463e5e37b4a279c4",
      login: user.username,
      firstname: user.firstName,
      secondname: user.lastName,
      password: user.password,
      email: user.email,
      phone: user.telephone,
      visitaddr: user.visitingAdress
    })
    .catch(function(error) {
      console.log(error);
		});
		console.log(user);
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
      (this.handleChange = this.handleChange.bind(this));
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  componentDidMount() {
    dates("5c0e790768d3725f9c3439c9", this);
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

				<button onClick={saveChanges}>SEND PUT</button>

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
          <Title store={formPersonal.store} title="Setting Information" />
          <div className={styles.settingInformation}>
            <div>
              <div className={styles.roles}>
                <span>Roles</span>
                <div />
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
