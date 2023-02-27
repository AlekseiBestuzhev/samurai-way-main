import { createRef, FC } from 'react';
import cls from './NewMessage.module.css'

type NewPostType = {
	//addPost: (postText: string) => void
}

export const NewMessage = (): JSX.Element => {

	const newMessageRef = createRef<HTMLTextAreaElement>();

	const addMessageHandler = () => {
		if (newMessageRef.current) {
			//addPost(newPostRef.current.value);
			newMessageRef.current.value = '';
		}
	}

	return (
		<div className={cls.block}>
			<textarea
				id="1"
				name="text"
				ref={newMessageRef}
				className={cls.textarea}
				placeholder='Write to chat...'></textarea>
			<button
				onClick={addMessageHandler}
				className={cls.button}>Send</button>
		</div>
	);
}