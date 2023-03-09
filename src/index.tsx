import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './redux/state';

const renderEntrieTree = () => {

	ReactDOM.render(
		<App state={store.getState()}
			dispatch={store.dispatch.bind(store)} />,
		document.getElementById('root')
	)
}

renderEntrieTree();
store.subscribe(renderEntrieTree);