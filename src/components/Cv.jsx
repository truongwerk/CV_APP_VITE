import PropTypes from "prop-types";
import "../styles/cv.css";
import anonymousProfile from "../assets/anonymous.jpg";
import addressLogo from "../assets/addressLogo.svg";
import phoneLogo from "../assets/phoneLogo.svg";
import emailLogo from "../assets/emailLogo.svg";
import webLogo from "../assets/webLogo.svg";

const CvDemo = (props) => {
	return (
		<div id="cvDemo">
			<div id="leftSide">
				<Profile src={props.cvData.profile} />
				<Contact
					address={props.cvData.address}
					phone={props.cvData.phone}
					email={props.cvData.email}
					website={props.cvData.website}
				/>
				<Skill skill={props.cvData.skill} />
			</div>
			<div id="rightSide">
				<Introduction
					name={props.cvData.name}
					position={props.cvData.position}
				/>
				<Summary description={props.cvData.description} />
				<Education education={props.cvData.education} />
				<Experience experience={props.cvData.experience} />
			</div>
		</div>
	);
};
CvDemo.propTypes = { cvData: PropTypes.object };

const Introduction = (props) => {
	return (
		<div id="introduction">
			<h1>{props.name}</h1>
			<h2>{props.position}</h2>
		</div>
	);
};
Introduction.propTypes = {
	name: PropTypes.string,
	position: PropTypes.string,
};

const Profile = (props) => {
	return (
		<img
			id="profilePicture"
			src={props.src || anonymousProfile}
			alt="profilePicture"
		></img>
	);
};
Profile.propTypes = {
	src: PropTypes.string,
};

const Summary = (props) => {
	return (
		<div id="summary">
			<h2>DESCRIPTION</h2>
			<p>{props.description}</p>
		</div>
	);
};
Summary.propTypes = {
	description: PropTypes.string,
};

const Contact = (props) => {
	return (
		<div id="contact">
			<h2>CONTACT</h2>
			<div id="address" className="contactInfo">
				<img className="contactIcon" alt="address" src={addressLogo}></img>
				<div>
					<h3>Address</h3>
					<p>{props.address}</p>
				</div>
			</div>
			<div id="phone" className="contactInfo">
				<img className="contactIcon" alt="phone" src={phoneLogo}></img>
				<div>
					<h3>Phone</h3>
					<p>{props.phone}</p>
				</div>
			</div>
			<div id="email" className="contactInfo">
				<img className="contactIcon" alt="email" src={emailLogo}></img>
				<div>
					<h3>Email</h3>
					<p>{props.email}</p>
				</div>
			</div>
			<div id="web" className="contactInfo">
				<img className="contactIcon" alt="web" src={webLogo}></img>
				<div>
					<h3>Website</h3>
					<p>{props.website}</p>
				</div>
			</div>
		</div>
	);
};
Contact.propTypes = {
	address: PropTypes.string,
	phone: PropTypes.string,
	email: PropTypes.string,
	website: PropTypes.string,
};

const Skill = (props) => {
	return (
		<div id="skill">
			<h2>Skills</h2>
			<ul>
				{props.skill.map((element, index) => {
					return <li key={index}>{element}</li>;
				})}
			</ul>
		</div>
	);
};
Skill.propTypes = { skill: PropTypes.arrayOf(PropTypes.string) };

const Education = (props) => {
	return (
		<div id="education">
			<h2>EDUCATION</h2>
			{props.education.map((element, index) => {
				return <School key={index} school={element} />;
			})}
		</div>
	);
};
Education.propTypes = {
	education: PropTypes.arrayOf(PropTypes.object),
};

const School = (props) => {
	return (
		<div className="school">
			<p className="year">{props.school.year}</p>
			<div>
				<p className="schoolName">{props.school.name}</p>
				<p className="major">{props.school.major}</p>
			</div>
		</div>
	);
};
School.propTypes = {
	school: PropTypes.objectOf(PropTypes.string),
};

const Experience = (props) => {
	return (
		<div id="experience">
			<h2>EXPERIENCE</h2>
			{props.experience.map((element, index) => {
				return <Company key={index} company={element} />;
			})}
		</div>
	);
};
Experience.propTypes = {
	experience: PropTypes.arrayOf(PropTypes.object),
};

const Company = (props) => {
	return (
		<div className="school">
			<p className="year">{props.company.year}</p>
			<div>
				<p className="schoolName">{props.company.name}</p>
				<p className="major">{props.company.position}</p>
			</div>
		</div>
	);
};
Company.propTypes = {
	company: PropTypes.objectOf(PropTypes.string),
};
export default CvDemo;
