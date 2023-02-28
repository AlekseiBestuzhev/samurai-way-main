import { createRef, FC } from 'react';
import cls from './NewMessage.module.css'

type NewMessageType = {
	addMessage: () => void,
	newMessageText: string,
	updateMessageText: (changedMessageText: string) => void
}

export const NewMessage: FC<NewMessageType> = ({ addMessage, updateMessageText, newMessageText }): JSX.Element => {

	const newMessageRef = createRef<HTMLTextAreaElement>();

	const onChangeHandler = () => {
		if (newMessageRef.current) {
			updateMessageText(newMessageRef.current.value);
		}
	}

	const addMessageHandler = () => addMessage();

	return (
		<div className={cls.block}>
			<textarea
				value={newMessageText}
				ref={newMessageRef}
				onChange={onChangeHandler}
				className={cls.textarea}
				placeholder='Write to chat...'></textarea>
			<button
				onClick={addMessageHandler}
				className={cls.button}>Send</button>
		</div>
	);
}