import React, { useEffect, useRef } from 'react';
import { MessagesPageType } from '../../redux/state';
import { Dialog } from './Dialog/Dialog';
import { FriendMessage } from './FriendMessage/FriendMessage';
import cls from './Messages.module.css'
import { MyMessage } from './MyMessage/MyMessage';
import { NewMessage } from './NewMessage/NewMessage';

type MessagesType = {
	messagesPage: MessagesPageType,
	addMessage: (messageText: string) => void
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
			? dialogsData.map(el => <Dialog key={el.id} id={el.id} name={el.name} />)
			: <span className={cls.emptyList}>Nobody needs you...</span>

	const dialogMessagesList: JSX.Element | JSX.Element[] =
		messagesData.length
			? messagesData.map(el => {
				if (el.iSender) {
					return <MyMessage key={el.id} id={el.id} text={el.text} iSender={true} />
				}
				else {
					return <FriendMessage key={el.id} id={el.id} text={el.text} iSender={false} />
				}
			})
			: <div className={cls.emptyList}>Messages will appear when you start chat...</div>

	const messagesEndRef = useRef<null | HTMLDivElement>(null)
	const scrollToBottom = () => {
		console.log('scroll');
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}
	useEffect(() => {
		console.log('useEffect')
		scrollToBottom()
	}, [messagesData]);

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
						<div ref={messagesEndRef}></div>
					</div>
					<NewMessage addMessage={props.addMessage} />
				</div>
			</div>
		</div>
	);
}