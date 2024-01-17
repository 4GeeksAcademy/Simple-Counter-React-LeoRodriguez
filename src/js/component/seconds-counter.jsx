import React from "react";

function SecondsCounter(props) {
	return (
		<div className="counter-display">
            <div className="clock-image">
            <i className="fa-regular fa-clock"></i>
            </div>
            <div className="seconds thousands">{props.thousandsDigit}</div>
            <div className="seconds hundreds">{props.hundredsDigit}</div>
            <div className="seconds tens">{props.tensDigit}</div>
            <div className="seconds ones">{props.onesDigit}</div>
        </div>
	);
};

export default SecondsCounter;