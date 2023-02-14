import React, { FC } from 'react';
import cls from './FriendMessage.module.css'

export type FriendMessageType = {
	id: string,
	text: string
}

export const FriendMessage: FC<FriendMessageType> = (props): JSX.Element => {

	return (
		<div className={cls.friendMessage}>
			{props.text}
		</div>
	);
}