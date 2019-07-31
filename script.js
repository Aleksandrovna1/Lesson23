'use strict';

//№1
function getSecondsToTomorrow(date) {
  let tomorrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1);
  let diff = tomorrow - date;
  return Math.round((diff / 60000) * 100) / 100;
}
let today = new Date();
console.log(getSecondsToTomorrow(today));

// №2
function getSecondsToday(date) {
  let today1 = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  let diff1 = date - today1;
  return Math.round(diff1 / 1000);
}
let today1 = new Date();
console.log(getSecondsToday(today1));

// №3
function getWeekDay(date) {
  let days = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П’ятниця', 'Субота'];
  return days[date.getDay()];
}
let date = new Date(2013, 0, 25);
console.log(getWeekDay(date));

//№4
function daysLeft() {
  let day = prompt('Введіть дату свого народження у форматі YYYY-MM-DD', '');
  let birthday = new Date(Date.parse(day));
  let now = new Date();
  let bDay = birthday.setFullYear(now.getFullYear());
  if (bDay < now) {
    birthday.setFullYear(now.getFullYear() + 1);
  }
  let ms = 24 * 60 * 60 * 1000;
  return Math.round((birthday.getTime() - now.getTime()) / ms);
};
console.log(daysLeft());
