import { createRef, FC } from 'react';
import cls from './NewPost.module.css'

type NewPostType = {
	addPost: () => void,
	newPostText: string,
	updatePostText: (changedPostText: string) => void
}

export const NewPost: FC<NewPostType> = ({ addPost, newPostText, updatePostText }): JSX.Element => {

	const newPostRef = createRef<HTMLTextAreaElement>();

	const addPostHandler = () => addPost();

	const onChangeHandler = () => {
		if (newPostRef.current) {
			updatePostText(newPostRef.current.value);
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