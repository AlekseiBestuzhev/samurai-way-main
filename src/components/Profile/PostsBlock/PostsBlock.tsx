import React from "react";
import { NewPost } from "./NewPost/NewPost";
import { Post, PostType } from "./Post/Post";
import cls from "./PostsBlock.module.css";

type PostsBlockType = {
	postsData: PostType[],
	addPost: (postText: string) => void
}

const PostsBlock: React.FC<PostsBlockType> = (props): JSX.Element => {

	const postsData = props.postsData;

	const postsList: JSX.Element | JSX.Element[] =
		postsData.length
			? postsData.map(el => <Post id={el.id} title={el.title} likes={el.likes} />)
			: <div className={cls.emptyList}>Your wall is empty...</div>

	return (
		<div className={'container'}>
			<NewPost addPost={props.addPost} />
			<hr />
			<div className={cls.title}>My wall</div>
			{postsList}
		</div>
	)
}

export default PostsBlock;
