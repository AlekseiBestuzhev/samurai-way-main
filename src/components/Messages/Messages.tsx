import React from 'react';
import {Dialog, DialogType} from './Dialog/Dialog';
import {FriendMessage, FriendMessageType} from './FriendMessage/FriendMessage';
import cls from './Messages.module.css'

export const Messages = () => {
    const dialogsData: DialogType[] = [
        {id: 1, name: 'Ilysha'},
        {id: 2, name: 'Dimasik'},
        {id: 3, name: 'Rymsky'},
        {id: 4, name: 'Korepan'},
        {id: 5, name: 'David'},
        {id: 6, name: 'Blinchik'}
    ];

    const dialoglist: JSX.Element | JSX.Element[] =
        dialogsData.length
            ? dialogsData.map(el => <Dialog id={el.id} name={el.name}/>)
            : <span className={cls.emptyList}>Nobody needs you...</span>

    const messagesData: FriendMessageType[] = [
        {id: 1, text: 'Hello, my friend'},
        {id: 2, text: 'How is it going?'},
        {id: 3, text: 'When we will meet?'},
        {id: 4, text: 'Maybe tomorrow?'}
    ];
    return (
        <div className='additionalContainer'>
            <h2 className={cls.title}>Dialogs</h2>
            <div className={cls.dialogs}>
                <div className={cls.dialogItems}>
                    {dialoglist}
                </div>
                <div className={cls.dialogContent}>
                    <FriendMessage id={1} text='Hello, my friend'/>
                    <FriendMessage id={2} text='How is it going?'/>
                    <FriendMessage id={3} text='When we will meet?'/>
                    <FriendMessage id={4} text='Maybe tomorrow?'/>
                </div>
            </div>
        </div>
    );
}