import React from 'react';
import cls from './NewPost.module.css'

export const NewPost = () => {

	return (
		<div className={cls.block}>
			<p>New post:</p>
			<textarea className={cls.textarea} name="text" id="1" placeholder='Write text here...'></textarea>
			<button>Send post</button>
		</div>
	);
}