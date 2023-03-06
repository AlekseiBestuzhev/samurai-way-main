import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import { Messages } from './components/Messages/Messages';
import { News } from './components/News/News';
import { BrowserRouter, HashRouter, Redirect, Route } from 'react-router-dom';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { StateType } from './redux/state';

type AppType = {
	state: StateType,
	addPost: () => void,
	addMessage: () => void,
	updatePostText: (changedPostText: string) => void,
	updateMessageText: (changedMessageText: string) => void
}

const App: React.FC<AppType> = (props): JSX.Element => {

	const renderMessages = () => <Messages
		addMessage={props.addMessage}
		messagesPage={props.state.messagesPage}
		updateMessageText={props.updateMessageText} />
	const renderProfile = () => <Profile
		addPost={props.addPost}
		profilePage={props.state.profilePage}
		updatePostText={props.updatePostText} />

	return (
		<HashRouter>
			<div className="app-wrapper">
				<Header />
				<Sidebar />
				<main className={'content'}>
					<Route path='/' exact render={() => <Redirect to={'/profile'} />} />
					<Route path='/profile' render={renderProfile} />
					<Route path='/messages' render={renderMessages} />
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />
				</main>
			</div>
		</HashRouter>
	);
}

export default App;