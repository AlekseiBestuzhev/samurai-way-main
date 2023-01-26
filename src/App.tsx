import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="app-wrapper">
            <header className={'header'}>
                <img
                    src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/1200px-NASA_Worm_logo.svg.png'}
                    alt={'Logo'}/>
            </header>
            <aside className={'sidebar'}>
                <nav>
                    <ul>
                        <li>
                            <a className={'link'} href={'#'}>Profile</a>
                        </li>
                        <li>
                            <a className={'link'} href={'#'}>Messages</a>
                        </li>
                        <li>
                            <a className={'link'} href={'#'}>News</a>
                        </li>
                        <li>
                            <a className={'link'} href={'#'}>Music</a>
                        </li>
                        <li>
                            <a className={'link'} href={'#'}>Settings</a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <main className={'content'}>Main</main>
        </div>
    );
}

export default App;