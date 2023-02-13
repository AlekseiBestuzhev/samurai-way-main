import React from 'react';
import cls from './Post.module.css';

export type PostType = {
	id: number,
	title: string,
	name: string
}

export const Post = (props: PostType) => {

	return (
		<div className={cls.post}>
			<img src="https://yobte.ru/uploads/posts/2019-11/kosmonavt-53-foto-24.jpg" alt="Avatar" className={cls.ava} />
			<div className={cls.sender}>
				<p className={cls.text}>{props.title}</p>
				<p className={cls.name}>{props.name}</p>
			</div>
			<div className={cls.likes}>
				<div className={cls.likeIcon}>Like</div>
				<span className={cls.likesCount}>{props.id}</span>
			</div>
		</div>
	);
}