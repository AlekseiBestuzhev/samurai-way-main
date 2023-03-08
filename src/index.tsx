import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/state';

const renderEntrieTree = () => {

	ReactDOM.render(
		<App state={store.getState()}
			addPost={store.addPost}
			addMessage={store.addMessage}
			updatePostText={store.updatePostText}
			updateMessageText={store.updateMessageText} />,
		document.getElementById('root')
	)
}

renderEntrieTree();
store.subscribe(renderEntrieTree);