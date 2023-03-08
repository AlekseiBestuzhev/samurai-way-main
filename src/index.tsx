import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/state';

const renderEntrieTree = () => {

	ReactDOM.render(
		<App state={store.getState()}
			addMessage={store.addMessage.bind(store)}
			dispatch={store.dispatch.bind(store)}
			updateMessageText={store.updateMessageText.bind(store)} />,
		document.getElementById('root')
	)
}

renderEntrieTree();
store.subscribe(renderEntrieTree);