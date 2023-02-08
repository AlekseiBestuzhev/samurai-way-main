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
						to='/dialogs/Ilysha'
						className={cls.dialog}>Ilysha</NavLink>
					<NavLink
						to='/dialogs/Dimasik'
						className={cls.dialog}>Dimasik</NavLink>
					<NavLink
						to='/dialogs/Rymsky'
						className={cls.dialog}>Rymsky</NavLink>
					<NavLink
						to='/dialogs/Korepan'
						className={cls.dialog}>Korepan</NavLink>
					<NavLink
						to='/dialogs/David'
						className={cls.dialog}>David</NavLink>
					<NavLink
						to='/dialogs/Blinchik'
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