import { FC } from 'react';
import cls from './FriendMessage.module.css'

export type MyMessageType = {
	id: string,
	text: string,
	iSender: boolean
}

export const MyMessage: FC<MyMessageType> = (props): JSX.Element => {

	return (
		<div className={cls.myMessage}>
			{props.text}
		</div>
	);
}