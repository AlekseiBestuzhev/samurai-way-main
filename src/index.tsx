import './index.css';
import state, { subscribe } from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, addPost, updateMessageText, updatePostText } from './redux/state';

const renderEntrieTree = () => {

	ReactDOM.render(
		<App state={state}
			addPost={addPost}
			addMessage={addMessage}
			updatePostText={updatePostText}
			updateMessageText={updateMessageText} />,
		document.getElementById('root')
	)
}

renderEntrieTree();
subscribe(renderEntrieTree);