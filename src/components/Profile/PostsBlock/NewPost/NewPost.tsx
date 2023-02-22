import { createRef, FC } from 'react';
import cls from './NewPost.module.css'

type NewPostType = {
	addPost: (postText: string) => void
}

export const NewPost: FC<NewPostType> = ({ addPost }): JSX.Element => {

	const newPostRef = createRef<HTMLTextAreaElement>();

	const addPostHandler = () => {
		if (newPostRef.current) {
			addPost(newPostRef.current.value);
			newPostRef.current.value = '';
		}
	}

	return (
		<div className={cls.block}>
			<textarea
				id="1"
				name="text"
				ref={newPostRef}
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