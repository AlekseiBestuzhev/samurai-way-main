import { v1 } from 'uuid';
import { DialogType } from '../components/Messages/Dialog/Dialog';
import { MessageUniversalType } from '../components/Messages/Messages';
import { PostType } from '../components/Profile/PostsBlock/Post/Post';
import { renderEntrieTree } from '../render';

export type MessagesPageType = {
	dialogsData: DialogType[],
	messagesData: MessageUniversalType[],
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
			{ id: v1(), text: 'Hello, my friend', iSender: false },
			{ id: v1(), text: 'How is it going?', iSender: false },
			{ id: v1(), text: 'When we will meet?', iSender: false },
			{ id: v1(), text: 'Maybe tomorrow?', iSender: false },
			{ id: v1(), text: 'Ok, let\'s tomorrow!', iSender: true }
		]
	},
	profilePage: {
		postsData: [
			{ id: v1(), title: 'It\'s my second post.', likes: 6 },
			{ id: v1(), title: 'It\'s my first post.', likes: 9 }
		]
	}
}

export const addPost = (postText: string) => {
	const newPost: PostType = {
		id: v1(),
		title: postText,
		likes: 0
	}
	state.profilePage.postsData.unshift(newPost);
	renderEntrieTree(state);
	console.log(state);
}

export const addMessage = (messageText: string) => {
	const newMessage: MessageUniversalType = {
		id: v1(),
		text: messageText,
		iSender: true
	}
	state.messagesPage.messagesData.push(newMessage);
	renderEntrieTree(state);
	console.log(state);
}

export default state;