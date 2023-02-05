import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import { Messages } from './components/Messages/Messages';
import { News } from './components/News/News';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Sidebar />
				<main className={'content'}>
					<Route path='/profile' component={Profile} />
					<Route path='/messages' component={Messages} />
					<Route path='/news' component={News} />
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;