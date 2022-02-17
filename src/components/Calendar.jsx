import React from 'react';
import Week from './Week';
import Weekday from './Weekday';

export default function Calendar (props) {
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{props.date.weekday}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{props.date.numDate}</div>
          <div className="ui-datepicker-material-month">{props.date.dayMonth}</div>
          <div className="ui-datepicker-material-year">{props.date.year}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{props.date.month}</span>&nbsp;<span className="ui-datepicker-year">{props.date.year}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <Week/>
        <Weekday/>
        <tbody>
          <tr>
            <td className="ui-datepicker-other-month">27</td>
            <td className="ui-datepicker-other-month">28</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
          </tr>
          <tr>
            <td>6</td>
            <td>7</td>
            <td className="ui-datepicker-today">8</td>
            <td>9</td>
            <td>10</td>
            <td>11</td>
            <td>12</td>
          </tr>
          {/* <!-- остальные недели --> */}
        </tbody>
      </table>
    </div>
  )
}