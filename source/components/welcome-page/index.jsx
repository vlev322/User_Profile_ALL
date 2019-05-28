import React, { Component } from "react";
import styles from "./index.sass";
import { handleInput, handleSubmit } from './dataLoginController.jsx'
import { responseController } from './loginStore'
// import { authorization } from './loginController'
export class Welcome extends Component {
	render() {
		return (
			<div className={styles.wrapper}>
				<section>
					<div className={styles.logo}></div>
					{/* <img src="./../../styles/img/logo.png" alt="advertising module" /> */}
					<h1>
						cm
          </h1>
					<p>Please login to your account</p>
					<div className={styles.authorization}>
						<span>{responseController()}</span>
						{/* <span>Login faild. Please try again</span> */}
						<form  onSubmit={handleSubmit} action="">
							<div className={styles.authorization_fields}>
								<div className={styles.formGroup}>
									<label htmlFor="username">Username</label>
									<br />
									<input
										id="username"
										type="text"
										placeholder="Enter your name"
										onChange={handleInput}
										name='email'
										autoFocus
										required
									/>
								</div>
								<div className={styles.formGroup}>
									<label htmlFor="password">Password</label>
									<br />
									<input
										id="password"
										type="password"
										placeholder="Enter password"
										onChange={handleInput}
										name='password'
										required
									/>
								</div>
							</div>
						<button className={styles.btn_submit} type="submit"></button>
						</form>
						<span>Forgot password</span>
					</div>
					<em>Released 01.00.00 (2018-12-31)</em>
					<br />
					<em>PADS4 - NDS Copyrught 2018 All Rights Reserved</em>
				</section>
				<section>
					<div className={styles.icon}></div>
					<img src="../../styles/img/icon.png" alt="" />
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
