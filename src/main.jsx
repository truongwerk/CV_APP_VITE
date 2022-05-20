import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import "./styles/reset.css";
import App from "./App";

const container = document.getElementById("root");
render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	container
);

// ReactDOM.createRoot(document.getElementById("root")).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );
