import React, { FC } from 'react';
import { MessageUniversalType } from '../Messages';
import cls from './FriendMessage.module.css'

export const FriendMessage: FC<MessageUniversalType> = (props): JSX.Element => {

	return (
		<div className={cls.friendMessage}>
			{props.text}
		</div>
	);
}