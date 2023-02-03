import React from "react";
import { NewPost } from "./NewPost/NewPost";
import cls from "./PostsBlock.module.css";

const PostsBlock = () => {
	return (
		<div className={'container'}>
			<NewPost />
			<div className={cls.title}>My posts</div>
			<div>Post 1</div>
			<div>Post 2</div>
		</div>
	)
}

export default PostsBlock;
