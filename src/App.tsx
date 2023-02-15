import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import { Messages } from './components/Messages/Messages';
import { News } from './components/News/News';
import { BrowserRouter, Route } from 'react-router-dom';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogType } from './components/Messages/Dialog/Dialog';

type AppType = {
	dialogsData: DialogType[]
}

const App: React.FC<AppType> = (props): JSX.Element => {

	const renderMessages = () => <Messages dialogsData={props.dialogsData} />

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Sidebar />
				<main className={'content'}>
					<Route path='/profile' component={Profile} />
					<Route path='/messages' render={renderMessages} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;