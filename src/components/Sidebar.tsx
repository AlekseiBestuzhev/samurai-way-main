import React from "react";
import './Sidebar.css';

const Sidebar = () => {
	return (
		<aside className={'sidebar'}>
			<nav>
				<ul>
					<li>
						<a className={'link'} href={'1#'}>Profile</a>
					</li>
					<li>
						<a className={'link'} href={'1#'}>Messages</a>
					</li>
					<li>
						<a className={'link'} href={'1#'}>News</a>
					</li>
					<li>
						<a className={'link'} href={'1#'}>Music</a>
					</li>
					<li>
						<a className={'link'} href={'1#'}>Settings</a>
					</li>
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar;
