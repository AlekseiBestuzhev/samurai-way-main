import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import cls from './Dialog.module.css'

type DialogType = {
	name: string,
}

export const Dialog: FC<DialogType> = (props): JSX.Element => {
	return (
		<NavLink
			to={`/messages/${props.name.toLocaleLowerCase()}`}
			activeClassName={cls.activeLink}
			className={cls.dialog}
		>{props.name}</NavLink>
	)
}