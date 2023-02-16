import React from 'react';
import { MessagesPageType } from '../../redux/state';
import { Dialog } from './Dialog/Dialog';
import { FriendMessage } from './FriendMessage/FriendMessage';
import cls from './Messages.module.css'

type MessagesType = {
	messagesPage: MessagesPageType
}

export const Messages: React.FC<MessagesType> = (props): JSX.Element => {

	const { dialogsData, messagesData } = props.messagesPage;

	const dialogsList: JSX.Element | JSX.Element[] =
		dialogsData.length
			? dialogsData.map(el => <Dialog id={el.id} name={el.name} />)
			: <span className={cls.emptyList}>Nobody needs you...</span>

	const dialogMessagesList: JSX.Element | JSX.Element[] =
		messagesData.length
			? messagesData.map(el => <FriendMessage id={el.id} text={el.text} />)
			: <div className={cls.emptyList}>Messages will appear when you start chat...</div>

	return (
		<div className='additionalContainer'>
			<h2 className={cls.title}>Dialogs</h2>
			<div className={cls.dialogs}>
				<div className={cls.dialogItems}>
					{dialogsList}
				</div>
				<div className={cls.dialogContent}>
					{dialogMessagesList}
				</div>
			</div>
		</div>
	);
}