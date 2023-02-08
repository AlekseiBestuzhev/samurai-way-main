import React from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Messages.module.css'

export const Messages = () => {

	return (
		<div className='additionalContainer'>
			<h2 className={cls.title}>Dialogs</h2>
			<div className={cls.dialogs}>
				<div className={cls.dialogItems}>
					<NavLink
						to='/messages/Ilysha'
						activeClassName={cls.activeLink}
						className={cls.dialog}>Ilysha</NavLink>
					<NavLink
						to='/messages/Dimasik'
						activeClassName={cls.activeLink}
						className={cls.dialog}>Dimasik</NavLink>
					<NavLink
						to='/messages/Rymsky'
						activeClassName={cls.activeLink}
						className={cls.dialog}>Rymsky</NavLink>
					<NavLink
						to='/messages/Korepan'
						activeClassName={cls.activeLink}
						className={cls.dialog}>Korepan</NavLink>
					<NavLink
						to='/messages/David'
						activeClassName={cls.activeLink}
						className={cls.dialog}>David</NavLink>
					<NavLink
						to='/messages/Blinchik'
						activeClassName={cls.activeLink}
						className={cls.dialog}>Blinchik</NavLink>
				</div>
				<div className={cls.dialogContent}>
					<div>Fucking</div>
					<div>dungeon</div>
					<div>master</div>
				</div>
			</div >
		</div>
	);
}