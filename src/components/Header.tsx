import React from "react";
import './Header.css';
import LoginButton from "./LoginButton";

const Header = () => {
	return (
		<header className={'header'}>
			<img
				src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1200px-NASA_Worm_logo.svg.png'} alt={'Logo'} />
			<LoginButton />
		</header>
	)
}

export default Header;
