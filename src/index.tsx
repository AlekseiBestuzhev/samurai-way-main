import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/state';

const renderEntrieTree = () => {

	ReactDOM.render(
		<App state={store.getState()}
			addPost={store.addPost.bind(store)}
			addMessage={store.addMessage.bind(store)}
			updatePostText={store.updatePostText.bind(store)}
			updateMessageText={store.updateMessageText.bind(store)} />,
		document.getElementById('root')
	)
}

renderEntrieTree();
store.subscribe(renderEntrieTree);