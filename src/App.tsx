import React from 'react';
import './App.css';
import SomeBlock from "./SomeBlock";
import Line from "./Line";

const App = () => {
    return (
        <div className="App">
            <div className='App-title'>
                <h1>Hello, samurai! Let's go!</h1>
                <h4>It's just the beginning</h4>
            </div>
            <SomeBlock/>
            <Line/>
            <p>Lorem ipsum dolar sit amet</p>
            <Line/>
            <SomeBlock/>
        </div>
    );
}

export default App;