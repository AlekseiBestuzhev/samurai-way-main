import React from "react";
import cls from './Profile.module.css';
import PostsBlock from "./PostsBlock/PostsBlock";
import { ProfilePageType } from "../../redux/state";

type ProfileType = {
	profilePage: ProfilePageType
}

const Profile: React.FC<ProfileType> = (props): JSX.Element => {
	return (
		<>
			<img className={cls.header}
				src={'https://wallup.net/wp-content/uploads/2016/01/257350-galaxy-NASA-space-Milky_Way.jpg'}
				alt={'Stars'} />
			<section className={cls.person}>
				<img className={cls.avatar} src={'https://masyamba.ru/%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8/18-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BF%D1%80%D0%BE-%D0%BA%D0%BE%D1%81%D0%BC%D0%BE%D0%BD%D0%B0%D0%B2%D1%82%D0%BE%D0%B2.jpg'} alt={'Avatar'} />
				<div className={cls.about}>
					<h2 className={cls.name}>Alex Nealex</h2>
					<p>beginner frontend developer</p>
				</div>
			</section>
			<PostsBlock postsData={props.profilePage.postsData} />
		</>
	)
}

export default Profile;
