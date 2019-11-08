import React, { useState } from "react";
const OnChange = e => {};

function LandingPage() {
	//const [usernameInput, setUsernameInput] = useState("");
	//const [passwordInput, setPasswordInput] = useState("");

	return (
		<>
			<div className="Header">
				<h1>Hello from Groovn Music Landing Page!</h1>
			</div>
			<div className="Body">
				<form>
					<input type="text" placeholder="username"></input>
					<input type="password" placeHolder="password"></input>
				</form>
			</div>
		</>
	);
}

export default LandingPage;
