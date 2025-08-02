import { useState } from "react";

const Heading = ({text}) => {
  return (
    <h1>{text}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
    
  )
}

const Statistics = ({statistics}) => {

  if (!statistics.all){
    return (
      <p>No feedback given</p>
    )
  }
  return (
    <table>
      <tbody>
        <StatisticLine text = "good"  value = {statistics.good} />
        <StatisticLine text = "neutral"  value = {statistics.neutral} />
        <StatisticLine text = "bad"  value = {statistics.bad} />
        <StatisticLine text = "all"  value = {statistics.all} />
        <StatisticLine text = "avarage"  value = {statistics.avarage} />
        <StatisticLine text = "positive"  value = {statistics.positive} />
      </tbody>
      
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  let avarage = ((good * 1) + (neutral * 0) + (bad * -1)) / all
  let positive = `${(good / all) * 100} %`

  if (!all){
    avarage = 0
    positive = "0 %"
  }

  const statistics = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    avarage: avarage,
    positive: positive
  }

  const increaseGood = () => {
    setGood(good + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)

  }
  const increaseBad = () => {
    setBad( bad + 1)

  }
  return (
    <div>
      <Heading text = "give feedback" />
      <Button onClick = {increaseGood} text = "good" />
      <Button onClick = {increaseNeutral} text = "neutral" />
      <Button onClick = {increaseBad} text = "bad" />
      <Heading text = "statistics" />
      <Statistics statistics = {statistics} />
    </div>

  )
}


export default App