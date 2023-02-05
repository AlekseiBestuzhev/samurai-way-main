import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import { Messages } from './components/Messages/Messages';

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Sidebar />
			<main className={'content'}>
				<Profile />
				<Messages />
			</main>
		</div>
	);
}

export default App;