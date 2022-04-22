import React, { useState,useRef } from "react";
import Input from "./components/Input";
import CvDemo from "./components/Cv";
import ReactToPrint from "react-to-print";
import Button from "@mui/material/Button";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import "./styles/app.css";

const App = () => {
	const [state, setState] = useState({
		name: "Name",
		profile: "",
		position: "Position",
		description:
			"Cupcake shortbread cake danish chocolate chocolate cake chocolate bar. Powder carrot cake tiramisu marzipan donut cotton candy toffee chocolate. Chupa chups powder tiramisu macaroon danish caramels gummi bears.",
		address: "A Street, B Town, C Country",
		phone: "123456789",
		email: "abc@gmail.com",
		website: "abc.com",
		skill: ["HTML", "CSS", "Javascript", "React"],
		education: [
			{ name: "School A", major: "Math", year: "2015 - 2016" },
			{ name: "School B", major: "English", year: "2016 - 2017" },
		],
		experience: [
			{ name: "Company A", position: "Font-End", year: "2017 - 2018" },
			{ name: "Company B", position: "Back-End", year: "2018 - Present" },
		],
	});
	const handleInputCallback = (childData, selector) => {
		setState({ ...state, [selector]: childData });
	};
  const printRef = useRef()
	return (
		<div id="App">
			<Header />
			<div id="content">
				<div id="inputForm">
					<Input parentCallback={handleInputCallback} />
          <ReactToPrint
							trigger={() => {
								return (
									<Button id="printBtn" fullWidth variant="outlined" endIcon={<SaveAsOutlinedIcon />}>
										Save CV as PDF
									</Button>
								);
							}}
							content={() => printRef.current}
						/>
				</div>
				<div id="cvWrapper" ref={printRef}>
					<CvDemo cvData={state} />
				</div>
			</div>
		</div>
	);
};

const Header = () => {
	return (
		<header>
			<h1>CV Application</h1>
			<p>
				© 2022 Create by{" "}
				<a
					href="https://github.com/truongwerk"
					target="_blank"
					rel="noreferrer noopener"
				>
					Tong Quang Truong
				</a>
			</p>
		</header>
	);
};

export default App;
