import { createRef, FC } from 'react';
import cls from './NewPost.module.css'

type NewPostType = {
	addPost: (postText: string) => void,
	newPostText: string
}

export const NewPost: FC<NewPostType> = ({ addPost, newPostText }): JSX.Element => {

	const newPostRef = createRef<HTMLTextAreaElement>();

	const addPostHandler = () => {
		if (newPostRef.current) {
			addPost(newPostRef.current.value);
			newPostRef.current.value = '';
		}
	}

	const onChangeHandler = () => {
		console.log('change');
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