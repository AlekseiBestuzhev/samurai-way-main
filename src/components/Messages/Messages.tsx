import React from 'react';
import { ActionsTypes, MessagesPageType } from '../../redux/state';
import { Dialog } from './Dialog/Dialog';
import cls from './Messages.module.css'
import { Message } from './Message/Message';
import { NewMessage } from './NewMessage/NewMessage';

type MessagesType = {
	messagesPage: MessagesPageType,
	dispatch: (action: ActionsTypes) => void
}

export type MessageType = {
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
			? messagesData.map(el => <Message key={el.id} id={el.id} text={el.text} iSender={el.iSender} />)
			: <div className={cls.emptyList}>Messages will appear when you start chat...</div>

	// const messagesEndRef = useRef<null | HTMLDivElement>(null)
	// const scrollToBottom = () => {
	// 	messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	// }
	// useEffect(() => {
	// 	scrollToBottom()
	// }, [messagesData]);

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
						{/* <div ref={messagesEndRef}></div> */}
					</div>
					<NewMessage
						dispatch={props.dispatch}
						newMessageText={props.messagesPage.newMessageText} />
				</div>
			</div>
		</div>
	);
}