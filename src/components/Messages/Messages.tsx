import React from 'react';
import { MessagesPageType } from '../../redux/state';
import { Dialog } from './Dialog/Dialog';
import { FriendMessage } from './FriendMessage/FriendMessage';
import cls from './Messages.module.css'
import { MyMessage } from './MyMessage/MyMessage';

type MessagesType = {
	messagesPage: MessagesPageType
}

export type MessageUniversalType = {
	id: string,
	text: string,
	iSender: boolean
}

export const Messages: React.FC<MessagesType> = (props): JSX.Element => {

	const { dialogsData, messagesData } = props.messagesPage;

	const dialogsList: JSX.Element | JSX.Element[] =
		dialogsData.length
			? dialogsData.map(el => <Dialog id={el.id} name={el.name} />)
			: <span className={cls.emptyList}>Nobody needs you...</span>

	const dialogMessagesList: JSX.Element | JSX.Element[] =
		messagesData.length
			? messagesData.map(el => {
				if (el.iSender) {
					return <MyMessage id={el.id} text={el.text} iSender={true} />
				}
				else {
					return <FriendMessage id={el.id} text={el.text} iSender={false} />
				}
			})
			: <div className={cls.emptyList}>Messages will appear when you start chat...</div>

	return (
		<div className='additionalContainer fixHeightBlock'>
			<h2 className={cls.title}>Dialogs</h2>
			<div className={cls.dialogs}>
				<div className={cls.dialogItems}>
					{dialogsList}
				</div>
				<div className={cls.dialogContent}>
					<div className={cls.dialogMessages}>
						{dialogMessagesList}
					</div>
					<div className="newGroup">
						<textarea name="message" id="message"></textarea>
						<button>Send</button>
					</div>
				</div>
			</div>
		</div>
	);
}