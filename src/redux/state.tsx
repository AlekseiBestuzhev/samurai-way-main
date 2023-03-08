import { v1 } from 'uuid';
import { DialogType } from '../components/Messages/Dialog/Dialog';
import { MessageType } from '../components/Messages/Messages';
import { PostType } from '../components/Profile/PostsBlock/Post/Post';


export type MessagesPageType = {
	dialogsData: DialogType[],
	messagesData: MessageType[],
	newMessageText: string
}

export type ProfilePageType = {
	postsData: PostType[],
	newPostText: string
}

export type StateType = {
	messagesPage: MessagesPageType,
	profilePage: ProfilePageType,
}

export const store = {
	state: {
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
			],
			newMessageText: ''
		},
		profilePage: {
			postsData: [
				{ id: v1(), title: 'It\'s my second post.', likes: 6 },
				{ id: v1(), title: 'It\'s my first post.', likes: 9 }
			],
			newPostText: ''
		}
	},
	updatePostText(changedPostText: string) {
		state.profilePage.newPostText = changedPostText;
		renderEntrieTree()
	},
	addPost() {
		const newPost: PostType = {
			id: v1(),
			title: state.profilePage.newPostText,
			likes: 0
		}
		state.profilePage.postsData.unshift(newPost);
		state.profilePage.newPostText = '';
		renderEntrieTree();
		console.log(state);
	},
	updateMessageText(changedMessageText: string) {
		state.messagesPage.newMessageText = changedMessageText;
		renderEntrieTree();
		console.log(state);
	},
	addMessage() {
		const newMessage: MessageType = {
			id: v1(),
			text: state.messagesPage.newMessageText,
			iSender: true
		}
		state.messagesPage.messagesData.push(newMessage);
		state.messagesPage.newMessageText = '';
		renderEntrieTree();
	},
	renderEntrieTree() {
		console.log('state has changed');
	},
	subscribe(observer: () => void) {
		renderEntrieTree = observer;
	}
}
