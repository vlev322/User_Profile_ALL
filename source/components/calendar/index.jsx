import React, { Component } from "react";
import moment from "moment";
import styles from "./index.sass";

const weekDays = () => {
  let days = [];
  for (let i = 1; i <= 7; ++i) {
    days.push(
      moment()
        .isoWeekday(i)
        .format("dd")
    );
  }
  return days;
};

const yearData = () => {
  let data = [];
  for (let m = 0; m < 12; ++m) {
    let day = moment({ year: 2018, month: m, day: 1 }); // формируем дату на первый день каждого месяца
    let daysInMonth = day.daysInMonth(); // количество дней в месяце
    let month = {
      // готовим объект месяца
      title: day.format("MMMM"),
      weeks: {}
    };
    // итерируем по количеству дней в месяце
    for (let d = 0; d < daysInMonth; ++d) {
      let week = day.week();
      // небольшой хак, момент считает
      // последние дни декабря за первую неделю,
      // но мне надо чтобы считалось за 53
      if (m === 11 && week === 1) {
        week = 53;
      }
      // если неделя еще не присутствует в месяце, то добавляем ее
      if (!month.weeks.hasOwnProperty(week)) {
        month.weeks[week] = {};
      }
      // добавляем день, у weekday() нумерация с нуля,
      // поэтому добавляю единицу, можно и не добавлять,
      // но так будет удобнее
      month.weeks[week][day.weekday() + 1] = {
        date: day.toDate()
      };
      // итерируем день на единицу, moment мутирует исходное значение
      day.add(1, "d");
    }
    // добавлям данные по месяцу в год
    data.push(month);
  }
  return data;
};

export class Calendar extends Component {
  render() {

//----- Если нам нужно отобразить целый год то нужно воспользоватся циклом
		// for (let i = 0; i < 12; i++) {

//----- Если нам нужно отобразить только одну неделю то
//----- нужно воспользоватся переменной и на прямую передать значение месяца
//----- учесть, что месяца начинаются у нас с 0, поэтому
//----- последний месяц будет под номером 11

		let i = 11
		console.log('<------------MONTH------------->', yearData()[i].title);		
		Object.keys(yearData()[i].weeks).map((w)=>{
			Object.keys(yearData()[i].weeks[w]).map((k)=>{
				if (yearData()[i].weeks[w][k].date.getDay() === 0 || yearData()[i].weeks[w][k].date.getDay() === 6)
					console.log(`######----->>>WEECKEND COMING--> ${yearData()[i].weeks[w][k].date.getDate()} ${moment().isoWeekday(yearData()[i].weeks[w][k].date.getDay()).format("dd")}`);
				else
				console.log(`weekdays--> ${yearData()[i].weeks[w][k].date.getDate()} ${moment().isoWeekday(yearData()[i].weeks[w][k].date.getDay()).format("dd")}`);
			})
		})
//----- При разкоментировании цикла, не забыть эту скобочку
		// }

    return (
      <div className={styles.wrapper}>
        <div className="main-title" />
        <div className="day_title" />
        {/* {yearData()[0].weeks.map(week => (
					week.map(day=>(
						<div className="day">
							<span>123dd</span>
						</div>						
					))
        ))} */}
        <div className="month">
          <div className="title">{yearData()[8].title}</div>
          <div className="month">
            {/* {
						yearData()[8].weeks.map((week, day)=>(
							week[day+1].date.getDate()
						))
					} */}
          </div>
          <div className="week">{}</div>
        </div>
      </div>
    );
  }
}

export default Calendar;
