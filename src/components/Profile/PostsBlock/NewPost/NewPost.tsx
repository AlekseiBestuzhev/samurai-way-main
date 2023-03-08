import { createRef, FC } from 'react';
import { ActionsTypes } from '../../../../redux/state';
import cls from './NewPost.module.css'

type NewPostType = {
	newPostText: string,
	dispatch: (action: ActionsTypes) => void
}

export const NewPost: FC<NewPostType> = ({ dispatch, newPostText }): JSX.Element => {

	const newPostRef = createRef<HTMLTextAreaElement>();

	const addPostHandler = () => dispatch({ type: 'ADD-POST' });

	const onChangeHandler = () => {
		if (newPostRef.current) {
			const currentValue = newPostRef.current.value;
			dispatch({ type: 'UPDATE-POST-TEXT', changedPostText: currentValue })
		}
	}

	return (
		<div className={cls.block}>
			<textarea
				ref={newPostRef}
				value={newPostText}
				onChange={onChangeHandler}
				className={cls.textarea}
				placeholder='Write text for a new post here...'></textarea>
			<div className={cls.buttons}>
				<button className={cls.newPostButton}>Attach</button>
				<button
					onClick={addPostHandler}
					className={cls.newPostButton}>Share</button>
			</div>
		</div>
	);
}