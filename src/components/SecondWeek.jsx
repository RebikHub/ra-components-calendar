import React from 'react'

export default function SecondWeek(props) {
  const days = props.week;
  const weekDays = days.map((day) => <td key={day.toString()}>{day}</td>);
  return (
    <tr>{weekDays}</tr>
  )
}
