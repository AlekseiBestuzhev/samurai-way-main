import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addPost, StateType } from './redux/state';

export const renderEntrieTree = (state: StateType) => {

	ReactDOM.render(
		<App state={state}
			addPost={addPost} />,
		document.getElementById('root')
	)
} 