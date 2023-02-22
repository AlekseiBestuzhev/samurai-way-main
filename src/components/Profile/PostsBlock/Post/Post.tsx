import React from 'react';
import { myAvatar } from '../../Profile';
import cls from './Post.module.css';

export type PostType = {
	id: string,
	title: string,
	likes: number
}

export const Post = (props: PostType) => {

	return (
		<div className={cls.post}>
			<img src={myAvatar} alt="Avatar" className={cls.ava} />
			<div className={cls.sender}>
				<p className={cls.text}>{props.title}</p>
				<p className={cls.name}>Alex Nealex</p>
			</div>
			<div className={cls.likes}>
				<div className={cls.likeIcon}></div>
				<span className={cls.likesCount}>{props.likes}</span>
			</div>
		</div>
	);
}