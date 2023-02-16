import React from 'react';
import { v1 } from 'uuid';
import { DialogType } from '../components/Messages/Dialog/Dialog';
import { PostType } from '../components/Profile/PostsBlock/Post/Post';
import { FriendMessageType } from '../components/Messages/FriendMessage/FriendMessage';

export type MessagesPageType = {
	dialogsData: DialogType[],
	messagesData: FriendMessageType[],
}

export type ProfilePageType = {
	postsData: PostType[]
}

export type StateType = {
	messagesPage: MessagesPageType,
	profilePage: ProfilePageType
}

const state: StateType = {
	messagesPage: {
		dialogsData: [
			{ id: 1, name: 'Ilysha' },
			{ id: 2, name: 'Dimasik' },
			{ id: 3, name: 'Rymsky' },
			{ id: 4, name: 'Korepan' },
			{ id: 5, name: 'David' },
			{ id: 6, name: 'Blinchik' }
		],
		messagesData: [
			{ id: v1(), text: 'Hello, my friend' },
			{ id: v1(), text: 'How is it going?' },
			{ id: v1(), text: 'When we will meet?' },
			{ id: v1(), text: 'Maybe tomorrow?' }
		]
	},
	profilePage: {
		postsData: [
			{ id: v1(), name: 'Tony Stark', title: 'How are you?', likes: 6 },
			{ id: v1(), name: 'Tony Stark', title: 'You\'re already here?', likes: 9 }
		]
	}
}

export default state;