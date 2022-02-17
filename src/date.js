const nameMonth = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
const numberMonth = new Date().getMonth();
const numDate = new Date().getDate();
const year = new Date().getFullYear();
const dayMonth = nameMonth[numberMonth];
const weekday = new Intl.DateTimeFormat('ru-RU', { weekday: 'long'}).format();
const month = new Intl.DateTimeFormat('ru-RU', { month: 'long'}).format();

const date = {
  numDate,
  year,
  dayMonth,
  weekday,
  month,
}

function dayOfMonth(year, month) {
  const date = new Date(year, month, 0);
  const numDate = date.getDate();
  let arrDay = [];
  for (let i = 1; i <= numDate; i++) {
    arrDay.push(i);
  }
  return arrDay;
}

const days = dayOfMonth(year, (numberMonth + 1));

export { date, days };
