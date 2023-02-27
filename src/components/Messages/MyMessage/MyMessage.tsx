import { FC } from 'react';
import { MessageUniversalType } from '../Messages';
import cls from './MyMessage.module.css'

export const MyMessage: FC<MessageUniversalType> = (props): JSX.Element => {

	return (
		<div className={cls.myMessage}>
			{props.text}
		</div>
	);
}