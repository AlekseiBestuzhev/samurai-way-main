import React from "react";
import { NavLink } from "react-router-dom";
import cls from './Sidebar.module.css';

const Sidebar = () => {
	return (
		<aside className={cls.sidebar}>
			<nav>
				<ul>
					<li>
						<NavLink
							activeClassName={cls.activeLink}
							className={cls.link}
							to={'/profile'}>Profile</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={cls.activeLink}
							className={cls.link}
							to={'/messages'}>Messages</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={cls.activeLink}
							className={cls.link}
							to={'/news'}>News</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={cls.activeLink}
							className={cls.link}
							to={'/music'}>Music</NavLink>
					</li>
					<li>
						<NavLink
							activeClassName={cls.activeLink}
							className={cls.link}
							to={'/settings'}>Settings</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	)
}

export default Sidebar;
