import React from "react";

const Sidebar = () => {
    return (
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
    )
}

export default Sidebar;
