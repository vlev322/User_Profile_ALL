import axios from "axios";
//импорт наших полей ввода
import { formPersonal, formContact } from "./../store/userProfileForm";
//импорт хранилища для взаимодействия с функцией Сохранить
import { userStore } from "../store/userInfo/storeUser";

//---> Запрос на сервер и передача данных в поля на странице редактирования данных пользователя
export const dates = (userId, self) => {
	axios
		.get(`http://185.233.117.46/api/v1/users/${userId}`)
		.then(function (response) {
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
		.catch(function (error) {
			console.log(error);
		});
};

//---> Смотрим с каким параметром перешли на страницу, 
// если 'create', то только очищаем поля функцией clear 
// если 'edit', то заполняем поля получеными ранее значениями  

export const changeUserInfo = (usersEdit, self) => {
	if (usersEdit === "create") {
		clear(self)
	} else if (usersEdit === "edit") {
		formPersonal.field[0].gettingData(self.state.username);
		formPersonal.field[1].gettingData(self.state.firstname);
		formPersonal.field[2].gettingData(self.state.secondname);
		formPersonal.field[3].gettingData(self.state.password);
		formContact.field[0].gettingData(self.state.email);
		formContact.field[1].gettingData(self.state.phone);
	}
};
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

//---> Получаем наши роли с сервера и передаем их в переменную состояния rolesList
export const get_Data = (id, self) => {
	axios
		.get(`http://185.233.117.46/api/v1/users/${id}`)
		.then(function(response) {
			self.setState({
				rolesList: response.data.roles
			})
		}.bind(self))				
		.catch(function(error) {
			console.log(error);
		});
};

//---> Функция сохранения данных и отправки их на сервер
export const saveChanges = (self) => {
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
		function() {
			axios
				.put(
					` http://185.233.117.46/api/v1/users/${userStore.getState().user}`,
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
		}.bind(self)
	);
}