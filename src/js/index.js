import React from "react";
import ReactDOM from "react-dom";

// include my styles
import "../styles/index.css";
import "../styles/seconds-counter.css";

//import my main app
import App from "./component/App.jsx";
import Footer from "./component/footer.jsx";

//render your react application
ReactDOM.render(<div><App /><Footer/></div>, document.querySelector("#app"));
