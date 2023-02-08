import React from 'react';
import cls from './NewPost.module.css'

export const NewPost = () => {

	return (
		<div className={cls.block}>
			<textarea className={cls.textarea} name="text" id="1" placeholder='Write text for a new post here...'></textarea>
			<div className={cls.buttons}>
				<button className={cls.newPostButton}>Attach</button>
				<button className={cls.newPostButton}>Share</button>
			</div>
		</div>
	);
}