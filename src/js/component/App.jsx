import React from "react";
import { useState,  useEffect } from "react";
import SecondsCounter from "./seconds-counter";
import calculateSeconds from "../../lib/time"


const App = () => {

	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter(counter => counter + 1)
		}, 1000)
		console.log(counter);

		return () => clearInterval(interval)
	}, [counter])

	return (
		<SecondsCounter 
		thousandsDigit = {calculateSeconds(counter, 1000)}
		hundredsDigit = {calculateSeconds(counter, 100)}
		tensDigit = {calculateSeconds(counter, 10)}
		onesDigit = {calculateSeconds(counter, 1)}
		/>
	);
};

export default App;       
