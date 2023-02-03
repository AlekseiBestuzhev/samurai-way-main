import React from "react";
import cls from "./PostsBlock.module.css";

const PostsBlock = () => {
	return (
		<div className={'container'}>
			<div className={cls.title}>My posts</div>
			<div>New post</div>
			<div>Post 1</div>
			<div>Post 2</div>
		</div>
	)
}

export default PostsBlock;
