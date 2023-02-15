import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DialogType } from './components/Messages/Dialog/Dialog';

const dialogsData: DialogType[] = [
	{ id: 1, name: 'Ilysha' },
	{ id: 2, name: 'Dimasik' },
	{ id: 3, name: 'Rymsky' },
	{ id: 4, name: 'Korepan' },
	{ id: 5, name: 'David' },
	{ id: 6, name: 'Blinchik' }
];

ReactDOM.render(
	<App dialogsData={dialogsData} />,
	document.getElementById('root')
);