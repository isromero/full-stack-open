import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
	return (
	  <div>
		<p>Hello {props.name}, you are {props.age} years old</p>
	  </div>
	)
  }

const App = () => {
	const name = "Marina"
	const age = 3
	return (
		<>
			<h1>Greetings</h1>
			<Hello name="George" age={6}/>
			<Hello name={name} age={age}/>
		</>
	  )
}

ReactDOM.render(<App />, document.getElementById('root')) 