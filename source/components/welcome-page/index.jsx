import React, { Component } from "react";

import styles from "./index.sass";
// import styles from ''

export class Welcome extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <section>
					<div className={styles.logo}></div>
          {/* <img src="./../../styles/img/logo.png" alt="advertising module" /> */}
          <h1>
            advertising <br />
            module
          </h1>
          <p>Please login to your account</p>
          <div className={styles.authorization}>
            <span>Login faild. Please try again</span>
            <div className={styles.authorization_fields}>
              <div className={styles.formGroup}>
                <label htmlFor="username">Username</label>
                <br />
                <input
                  id="username"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  id="password"
                  type="password"
                  placeholder="Enter password"
                />
              </div>
            </div>
						<span>Forgot password</span>
          </div>
          <em>Released 01.00.00 (2018-12-31)</em>
          <br />
          <em>PADS4 - NDS Copyrught 2018 All Rights Reserved</em>
        </section>
        <section>
					<div className={styles.icon}></div>
          {/* <img src="../../styles/img/icon.png" alt="" /> */}
          <div className={styles.moreInfo}>
            <span>
              visit <b>pads4.com</b>
            </span>
            <span>for more info</span>
          </div>
        </section>
      </div>
    );
  }
}

export default Welcome;
