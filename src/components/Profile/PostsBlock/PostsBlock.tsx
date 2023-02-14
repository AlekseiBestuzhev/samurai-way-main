import React from "react";
import { NewPost } from "./NewPost/NewPost";
import { Post } from "./Post/Post";
import cls from "./PostsBlock.module.css";

type PostType = {
	id: number,
	name: string,
	title: string,
	likes: number
}

const PostsBlock = () => {
	const postsData: PostType[] = [
		{ id: 1, name: 'Tony Stark', title: 'How are you?', likes: 6 },
		{ id: 2, name: 'Tony Stark', title: 'You\'re already here?', likes: 9 }
	];

	const postsList: JSX.Element | JSX.Element[] =
		postsData.length
			? postsData.map(el => <Post id={el.id} name={el.name} title={el.title} likes={el.likes} />)
			: <div className={cls.emptyList}>Your wall is empty...</div>

	return (
		<div className={'container'}>
			<NewPost />
			<hr />
			<div className={cls.title}>My wall</div>
			{postsList}
		</div>
	)
}

export default PostsBlock;
