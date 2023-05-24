import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticsLine = (props) => {
	return (
		<tr>
			<td>{props.text}</td>
			<td>{props.value}</td>
		</tr>
	)
}

const Statistics = (props) => {
	return (
	<div>
		<table>
			<tbody>
				<StatisticsLine text="good " value={props.good}></StatisticsLine>
				<StatisticsLine text="neutral " value={props.neutral}></StatisticsLine>
				<StatisticsLine text="bad " value={props.bad}></StatisticsLine>
				<StatisticsLine text="all " value={props.good + props.neutral + props.bad}></StatisticsLine>
				<StatisticsLine text="average " value={(props.good + props.neutral + props.bad) / 3}></StatisticsLine>
				<StatisticsLine text="positive" value={(props.good / (props.good + props.neutral + props.bad) * 100 ) + " %"}></StatisticsLine>
			</tbody>
		</table>
	</div>
	)
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

	const handleGood = () => setGood(good + 1);
	const handleNeutral = () => setNeutral(neutral + 1);
	const handleBad = () => setBad(bad + 1);
	const hasFeedback = good + neutral + bad > 0;
  return (
    <div>
      <h2>give feedback</h2>
	  <button onClick={handleGood}>good</button>
	  <button onClick={handleNeutral}>neutral</button>
	  <button onClick={handleBad}>bad</button>
	  <h2>statistics</h2>
	  {hasFeedback && (
		<Statistics good={good} neutral={neutral} bad={bad}></Statistics>
		)}
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)