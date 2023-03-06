import { FC } from 'react';
import { MessageType } from '../Messages';
import cls from './Message.module.css'

export const Message: FC<MessageType> = (props): JSX.Element => {

	const messageClasses = `${cls.message} ${props.iSender ? cls.iSender : ''}`;

	return (
		<div className={messageClasses}>
			{props.text}
		</div>
	);
}