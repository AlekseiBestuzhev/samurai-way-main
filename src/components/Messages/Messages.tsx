import React from 'react';
import cls from './Messages.module.css'

export const Messages = () => {

	return (
		<div className='container additionalContainer'>
			<h2 className={cls.title}>Dialogs</h2>
			<div className={cls.dialogs}>
				<div className={cls.dialogItems}>
					<div className={cls.dialog}>Ilysha</div>
					<div className={cls.dialog}>Dimasik</div>
					<div className={cls.dialog}>Rymsky</div>
					<div className={cls.dialog}>Korepan</div>
					<div className={cls.dialog}>David</div>
					<div className={cls.dialog}>Blinchik</div>
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