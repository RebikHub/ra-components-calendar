import React from 'react'
import FifthWeek from './FifthWeek'
import FirstWeek from './FirstWeek'
import FourthWeek from './FourthWeek'
import SecondWeek from './SecondWeek'
import ThirdWeek from './ThirdWeek'

export default function DaysInMonth(props) {
  return (
    <tbody>
      <FirstWeek week={props.days.first}/>
      <SecondWeek week={props.days.second}/>
      <ThirdWeek week={props.days.third}/>
      <FourthWeek week={props.days.fourth}/>
      <FifthWeek week={props.days.fifth}/>
    </tbody>
  )
}
