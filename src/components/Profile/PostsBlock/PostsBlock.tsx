import React from "react";
import { NewPost } from "./NewPost/NewPost";
import { Post } from "./Post/Post";
import cls from "./PostsBlock.module.css";

const PostsBlock = () => {
	return (
		<div className={'container'}>
			<NewPost />
			<div className={cls.title}>My posts</div>
			<Post name='Tony Stark' title="How are you?" />
		</div>
	)
}

export default PostsBlock;
