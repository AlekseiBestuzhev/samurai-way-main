import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, { addPost } from './redux/state';

addPost('Hello there')

ReactDOM.render(
	<App state={state} />,
	document.getElementById('root')
);