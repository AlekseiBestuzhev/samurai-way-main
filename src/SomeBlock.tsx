import React from 'react';
import './SomeBlock.css'
import Triangle from "./Triangle";

const SomeBlock = () => {
    return (
        <div>
            <h5 className='SomeBlock-title'>Block</h5>
            <Triangle />
            <Triangle />
            <Triangle />
        </div>
    );
}

export default SomeBlock;