import './App.css';
import { FC } from 'react';
import { News } from './components/News/News';
import Header from "./components/Header/Header";
import { Music } from './components/Music/Music';
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import { ActionsTypes, StateType } from './redux/state';
import { Settings } from './components/Settings/Settings';
import { Messages } from './components/Messages/Messages';
import { HashRouter, Redirect, Route } from 'react-router-dom';

type AppType = {
	state: StateType,
	dispatch: (action: ActionsTypes) => void
}

const App: FC<AppType> = (props): JSX.Element => {

	const renderMessages = () => <Messages
		dispatch={props.dispatch}
		messagesPage={props.state.messagesPage} />
	const renderProfile = () => <Profile
		dispatch={props.dispatch}
		profilePage={props.state.profilePage} />

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