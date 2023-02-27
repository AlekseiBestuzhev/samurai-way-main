import { createRef, FC } from 'react';
import cls from './NewMessage.module.css'

type NewMessageType = {
	addMessage: (messageText: string) => void
}

export const NewMessage: FC<NewMessageType> = ({ addMessage }): JSX.Element => {

	const newMessageRef = createRef<HTMLTextAreaElement>();

	const addMessageHandler = () => {
		if (newMessageRef.current) {
			addMessage(newMessageRef.current.value);
			newMessageRef.current.value = '';
		}
	}

	return (
		<div className={cls.block}>
			<textarea
				id="message"
				name="message"
				ref={newMessageRef}
				className={cls.textarea}
				placeholder='Write to chat...'></textarea>
			<button
				onClick={addMessageHandler}
				className={cls.button}>Send</button>
		</div>
	);
}