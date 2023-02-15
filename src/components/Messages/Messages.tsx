import React from 'react';
import { v1 } from 'uuid';
import { Dialog, DialogType } from './Dialog/Dialog';
import { FriendMessage, FriendMessageType } from './FriendMessage/FriendMessage';
import cls from './Messages.module.css'

type MessagesType = {
	dialogsData: DialogType[]
}

export const Messages: React.FC<MessagesType> = (props): JSX.Element => {

	const dialogsData = props.dialogsData;

	const dialogsList: JSX.Element | JSX.Element[] =
		dialogsData.length
			? dialogsData.map(el => <Dialog id={el.id} name={el.name} />)
			: <span className={cls.emptyList}>Nobody needs you...</span>

	const messagesData: FriendMessageType[] = [
		{ id: v1(), text: 'Hello, my friend' },
		{ id: v1(), text: 'How is it going?' },
		{ id: v1(), text: 'When we will meet?' },
		{ id: v1(), text: 'Maybe tomorrow?' }
	];

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