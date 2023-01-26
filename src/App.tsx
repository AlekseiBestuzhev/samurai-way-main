import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className={'header'}>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1200px-NASA_Worm_logo.svg.png'} alt={'Logo'}/>
            </header>
            <aside className={'sidebar'}>Menu</aside>
            <main className={'content'}>Main</main>
        </div>
    );
}

export default App;