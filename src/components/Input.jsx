import  { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import deleteIcon from "../assets/deleteIcon.svg";

import "../styles/input.css";

const InputFile = styled("input")({
	display: "none",
});

const Input = (props) => {
	const inputChange = (e) => {
		const selector = e.target.id.replace("input", "").toLowerCase();
		props.parentCallback(e.target.value, selector);
	};
	const inputProfile = (e) => {
		const selector = e.target.id.replace("input", "").toLowerCase();
		props.parentCallback(URL.createObjectURL(e.target.files[0]), selector);
	};
	const inputMode = (value, mode) => {
		props.parentCallback(value, mode);
	};
	return (
		<>
			<div id="basicInput">
				<h2>Information</h2>
				<TextField
					label="Name"
					fullWidth
					size="small"
					onChange={inputChange}
					id="inputName"
					className="longInput"
				/>
				<label htmlFor="inputProfile">
					<InputFile
						accept="image/*"
						id="inputProfile"
						type="file"
						onChange={inputProfile}
					/>
					<Button
						variant="outlined"
						fullWidth
						component="span"
						endIcon={<PhotoCamera />}
						id="profileLabel"
					>
						Upload Profile Picture
					</Button>
				</label>
				<TextField
					label="Position"
					fullWidth
					size="small"
					onChange={inputChange}
					id="inputPosition"
					className="longInput"
				/>
				<TextField
					label="Description"
					fullWidth
					size="small"
					onChange={inputChange}
					multiline
					rows={4}
					id="inputDescription"
					className="longInput"
				/>
				<h2>Contact</h2>
				<TextField
					label="Address"
					fullWidth
					size="small"
					onChange={inputChange}
					id="inputAddress"
					className="longInput"
				/>
				<TextField
					label="Phone"
					fullWidth
					size="small"
					onChange={inputChange}
					id="inputPhone"
					className="longInput"
				/>
				<TextField
					label="Email"
					fullWidth
					size="small"
					onChange={inputChange}
					id="inputEmail"
					className="longInput"
				/>
				<TextField
					label="Website"
					fullWidth
					size="small"
					onChange={inputChange}
					id="inputWebsite"
					className="longInput"
				/>
			</div>
			<SkillInput inputCallback={inputMode} />
			<EducationInput inputCallback={inputMode} />
			<ExperienceInput inputCallback={inputMode} />
		</>
	);
};
Input.propTypes = {
	parentCallback: PropTypes.func,
};

const SkillInput = (props) => {
	const [inputSkill, setInputSkill] = useState([]);
	const addSkill = () => {
		setInputSkill(inputSkill.concat(""));
	};
	const deleteSkill = (i) => {
		setInputSkill(inputSkill.filter((item, index) => index !== i));
	};
	const changeSkill = (index, value) => {
		const newInputSkill = inputSkill;
		newInputSkill[index] = value;
		setInputSkill(newInputSkill);
	};
	useEffect(() => {
		if (inputSkill.length === 0) {
			props.inputCallback(["HTML", "CSS", "Javascript", "React"], "skill");
		} else {
			props.inputCallback(inputSkill, "skill");
		}
	}, [props]);

	return (
		<div id="skillInput">
			<h2>Skill</h2>
			{inputSkill.map((element, index) => {
				return (
					<div key={index} className="skills">
						<TextField
							id="outlined-basic"
							label={`Skill ${index + 1}`}
							variant="outlined"
							size="small"
							value={element}
							onChange={(e) => changeSkill(index, e.target.value)}
						/>
						<img
							src={deleteIcon}
							alt="deleteIcon"
							className="deleteIcon"
							onClick={() => deleteSkill(index)}
						/>
					</div>
				);
			})}
			<IconButton
				aria-label="addCircleIcon"
				size="large"
				id="addSkill"
				onClick={addSkill}
			>
				<AddCircleIcon fontSize="inherit" />
			</IconButton>
		</div>
	);
};
SkillInput.propTypes = {
	inputCallback: PropTypes.func,
};

const EducationInput = (props) => {
	const [inputSchool, setInputSchool] = useState([]);
	const addSchool = () => {
		setInputSchool(
			inputSchool.concat({
				name: "",
				major: "",
				year: "",
			})
		);
	};
	const deleteSchool = (i) => {
		setInputSchool(inputSchool.filter((element, index) => index !== i));
	};
	const changeSchool = (i, value, mode) => {
		const newInputSchool = inputSchool;
		newInputSchool[i] = { ...newInputSchool[i], [mode]: value };
		setInputSchool(newInputSchool);
	};
	useEffect(() => {
		if (inputSchool.length === 0) {
			props.inputCallback(
				[
					{ name: "School A", major: "Math", year: "2015 - 2016" },
					{ name: "School B", major: "English", year: "2016 - 2017" },
				],
				"education"
			);
		} else {
			props.inputCallback(inputSchool, "education");
		}
	}, [inputSchool]);
	return (
		<div id="educationInput">
			<h2>Education</h2>
			{inputSchool.map((element, index) => {
				return (
					<div key={index} className="schoolInput">
						<TextField
							label={`School ${index + 1}`}
							fullWidth
							value={element.name}
							className="longInput"
							size="small"
							onChange={(e) => {
								changeSchool(index, e.target.value, "name");
							}}
						/>
						<TextField
							label={`Major ${index + 1}`}
							fullWidth
							value={element.major}
							className="longInput"
							size="small"
							onChange={(e) => {
								changeSchool(index, e.target.value, "major");
							}}
						/>
						<div>
							<TextField
								label={`Year ${index + 1}`}
								fullWidth
								value={element.year}
								className="shortInput"
								size="small"
								onChange={(e) => {
									changeSchool(index, e.target.value, "year");
								}}
							/>
							<img
								src={deleteIcon}
								alt="deleteIcon"
								className="deleteIcon"
								onClick={() => {
									deleteSchool(index);
								}}
							/>
						</div>
					</div>
				);
			})}
			<IconButton
				aria-label="addCircleIcon"
				size="large"
				id="addSchool"
				onClick={addSchool}
			>
				<AddCircleIcon fontSize="inherit" />
			</IconButton>
		</div>
	);
};
EducationInput.propTypes = {
	inputCallback: PropTypes.func,
};

const ExperienceInput = (props) => {
	const [inputCompany, setInputCompany] = useState([]);
	const addCompany = () => {
		setInputCompany(
			inputCompany.concat({
				name: "",
				position: "",
				year: "",
			})
		);
	};
	const deleteCompany = (i) => {
		setInputCompany(inputCompany.filter((element, index) => index !== i));
	};
	const changeCompany = (i, value, mode) => {
		const newInputCompany = inputCompany;
		newInputCompany[i] = { ...newInputCompany[i], [mode]: value };
		setInputCompany(newInputCompany);
	};
	useEffect(() => {
		if (inputCompany.length === 0) {
			props.inputCallback(
				[
					{ name: "Company A", position: "Font-End", year: "2017 - 2018" },
					{ name: "Company B", position: "Back-End", year: "2018 - Present" },
				],
				"experience"
			);
		} else {
			props.inputCallback(inputCompany, "experience");
		}
	}, [inputCompany]);
	return (
		<div id="experienceInput">
			<h2>Experience</h2>
			{inputCompany.map((element, index) => {
				return (
					<div key={index} className="schoolInput">
						<TextField
							label={`Company ${index + 1}`}
							fullWidth
							value={element.name}
							className="longInput"
							size="small"
							onChange={(e) => {
								changeCompany(index, e.target.value, "name");
							}}
						/>
						<TextField
							label={`Position ${index + 1}`}
							fullWidth
							value={element.position}
							className="longInput"
							size="small"
							onChange={(e) => {
								changeCompany(index, e.target.value, "position");
							}}
						/>
						<div>
							<TextField
								label={`Year ${index + 1}`}
								fullWidth
								value={element.year}
								className="shortInput"
								size="small"
								onChange={(e) => {
									changeCompany(index, e.target.value, "year");
								}}
							/>
							<img
								src={deleteIcon}
								alt="deleteIcon"
								className="deleteIcon"
								onClick={() => {
									deleteCompany(index);
								}}
							/>
						</div>
					</div>
				);
			})}
			<IconButton
				aria-label="addCircleIcon"
				size="large"
				id="addCompany"
				onClick={addCompany}
			>
				<AddCircleIcon fontSize="inherit" />
			</IconButton>
		</div>
	);
};
ExperienceInput.propTypes = {
	inputCallback: PropTypes.func,
};

export default Input;
