import React from "react";
import { NavLink } from "react-router-dom";
import cls from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<aside className={cls.sidebar}>
			<nav>
				<ul>
					<li>
						<NavLink className={cls.link} to={'/profile'}>Profile</NavLink>
					</li>
					<li>
						<NavLink className={cls.link} to={'/messages'}>Messages</NavLink>
					</li>
					<li>
						<NavLink className={cls.link} to={'/news'}>News</NavLink>
					</li>
					<li>
						<a className={cls.link} href={'1#'}>Music</a>
					</li>
					<li>
						<a className={cls.link} href={'1#'}>Settings</a>
					</li>
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar;
