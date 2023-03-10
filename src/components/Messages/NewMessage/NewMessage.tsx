import { createRef, FC } from 'react';
import { ActionsTypes, addMessageActionCreator, updateMessageTextActionCreator } from '../../../redux/state';
import cls from './NewMessage.module.css'

type NewMessageType = {
	newMessageText: string,
	dispatch: (action: ActionsTypes) => void
}

export const NewMessage: FC<NewMessageType> = ({ dispatch, newMessageText }): JSX.Element => {

	const newMessageRef = createRef<HTMLTextAreaElement>();

	const onChangeHandler = () => {
		if (newMessageRef.current) {
			const currentValue = newMessageRef.current.value;
			dispatch(updateMessageTextActionCreator(currentValue));
		}
	}

	const addMessageHandler = () => dispatch(addMessageActionCreator());

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