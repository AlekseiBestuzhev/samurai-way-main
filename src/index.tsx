import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
	<App
		dialogsData={dialogsData}
		messagesData={messagesData}
		postsData={postsData} />,
	document.getElementById('root')
);