import { v1 } from 'uuid';
import { MessageType } from '../components/Messages/Messages';
import { DialogType } from '../components/Messages/Dialog/Dialog';
import { PostType } from '../components/Profile/PostsBlock/Post/Post';

const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export const addPostActionCreator = () => ({ type: ADD_POST } as const);
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE } as const);
export const updatePostTexActionCreator = (newText: string) => (
	{ type: UPDATE_POST_TEXT, changedPostText: newText } as const);
export const updateMessageTextActionCreator = (newText: string) => (
	{ type: UPDATE_MESSAGE_TEXT, changedMessageText: newText } as const);

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

export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof addMessageActionCreator> |
	ReturnType<typeof updatePostTexActionCreator> | ReturnType<typeof updateMessageTextActionCreator>;

type StoreType = {
	_state: StateType,
	_callSubscriber: () => void,
	subscribe: (observer: () => void) => void,
	getState: () => StateType,
	dispatch: (action: ActionsTypes) => void,
}

export const store: StoreType = {
	_state: {
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
	_callSubscriber() {
		console.log('state has changed');
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	getState() {
		return this._state
	},
	dispatch(action) {
		if (action.type === 'UPDATE-POST-TEXT') {
			this._state.profilePage.newPostText = action.changedPostText;
			this._callSubscriber();
		}
		else if (action.type === 'ADD-POST') {
			const newPost: PostType = {
				id: v1(),
				title: this._state.profilePage.newPostText,
				likes: 0
			}
			this._state.profilePage.postsData.unshift(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber();
		}
		else if (action.type === 'UPDATE-MESSAGE-TEXT') {
			this._state.messagesPage.newMessageText = action.changedMessageText;
			this._callSubscriber();
		}
		else if (action.type === 'ADD-MESSAGE') {
			const newMessage: MessageType = {
				id: v1(),
				text: this._state.messagesPage.newMessageText,
				iSender: true
			}
			this._state.messagesPage.messagesData.push(newMessage);
			this._state.messagesPage.newMessageText = '';
			this._callSubscriber();
		}
	}
}
