import React from 'react';
import { Dialog } from './Dialog/Dialog';
import { FriendMessage } from './FriendMessage/FriendMessage';
import cls from './Messages.module.css'

export const Messages = () => {

	return (
		<div className='additionalContainer'>
			<h2 className={cls.title}>Dialogs</h2>
			<div className={cls.dialogs}>
				<div className={cls.dialogItems}>
					<Dialog id={1} name='Ilysha' />
					<Dialog id={2} name='Dimasik' />
					<Dialog id={3} name='Rymsky' />
					<Dialog id={4} name='Korepan' />
					<Dialog id={5} name='David' />
					<Dialog id={6} name='Blinchik' />
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