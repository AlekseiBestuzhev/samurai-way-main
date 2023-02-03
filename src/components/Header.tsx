import React from "react";
import './Header.css';
import LogInButton from "./LogInButton";

const Header = () => {
	return (
		<header className={'header'}>
			<img
				src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1200px-NASA_Worm_logo.svg.png'} alt={'Logo'} />
			<LogInButton />
		</header>
	)
}

export default Header;
