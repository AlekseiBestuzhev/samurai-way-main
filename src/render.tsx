import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, addPost, StateType, updateMessageText, updatePostText } from './redux/state';

export const renderEntrieTree = (state: StateType) => {

	ReactDOM.render(
		<App state={state}
			addPost={addPost}
			addMessage={addMessage}
			updatePostText={updatePostText}
			updateMessageText={updateMessageText} />,
		document.getElementById('root')
	)
} 