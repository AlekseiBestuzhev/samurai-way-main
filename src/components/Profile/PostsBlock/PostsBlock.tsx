import React from "react";
import { NewPost } from "./NewPost/NewPost";
import { Post } from "./Post/Post";
import cls from "./PostsBlock.module.css";

const PostsBlock = () => {
	const postsData = [
		{id: 1, name:'Tony Stark', text: 'How are you?', likes: 6},
		{id: 2, name:'Tony Stark', text: 'You\'re already here?', likes: 9}
	];

	return (
		<div className={'container'}>
			<NewPost />
			<hr />
			<div className={cls.title}>My wall</div>
			<Post id={1} name='Tony Stark' title="How are you?" likes={6} />
			<Post id={2} name='Tony Stark' title="You're already here?"  likes={9}/>
		</div>
	)
}

export default PostsBlock;
