import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DialogType } from './components/Messages/Dialog/Dialog';
import { FriendMessageType } from './components/Messages/FriendMessage/FriendMessage';
import { v1 } from 'uuid';
import { PostType } from './components/Profile/PostsBlock/Post/Post';

const dialogsData: DialogType[] = [
	{ id: 1, name: 'Ilysha' },
	{ id: 2, name: 'Dimasik' },
	{ id: 3, name: 'Rymsky' },
	{ id: 4, name: 'Korepan' },
	{ id: 5, name: 'David' },
	{ id: 6, name: 'Blinchik' }
];

const messagesData: FriendMessageType[] = [
	{ id: v1(), text: 'Hello, my friend' },
	{ id: v1(), text: 'How is it going?' },
	{ id: v1(), text: 'When we will meet?' },
	{ id: v1(), text: 'Maybe tomorrow?' }
];

const postsData: PostType[] = [
	{ id: v1(), name: 'Tony Stark', title: 'How are you?', likes: 6 },
	{ id: v1(), name: 'Tony Stark', title: 'You\'re already here?', likes: 9 }
];

ReactDOM.render(
	<App
		dialogsData={dialogsData}
		messagesData={messagesData}
		postsData={postsData} />,
	document.getElementById('root')
);