import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { FriendMessage } from './FriendMessage/FriendMessage';
import cls from './Messages.module.css'

type DialogType = {
	name: string,
}

const Dialog: FC<DialogType> = (props): JSX.Element => {
	return (
		<NavLink
			to={`/messages/${props.name.toLocaleLowerCase()}`}
			activeClassName={cls.activeLink}
			className={cls.dialog}
		>{props.name}</NavLink>
	)
}

export const Messages = () => {

	return (
		<div className='additionalContainer'>
			<h2 className={cls.title}>Dialogs</h2>
			<div className={cls.dialogs}>
				<div className={cls.dialogItems}>
					<Dialog name='Ilysha' />
					<Dialog name='Dimasik' />
					<Dialog name='Rymsky' />
					<Dialog name='Korepan' />
					<Dialog name='David' />
					<Dialog name='Blinchik' />
				</div>
				<div className={cls.dialogContent}>
					<FriendMessage text='Hello, my friend' />
					<FriendMessage text='How is it going?' />
					<FriendMessage text='When we will meet?' />
					<FriendMessage text='Maybe tomorrow?' />
				</div>
			</div >
		</div>
	);
}