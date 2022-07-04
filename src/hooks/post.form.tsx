import { Dispatch, MutableRefObject, SetStateAction } from "react";

export const handleChangeEditor = (content, cont: MutableRefObject<string>) => {
	cont.current = content;
};

export const handleChange = (
	e,
	description: {
		title: string;
		description: string;
		facebook: string;
		password: string;
	},
	setDescription: Dispatch<
		SetStateAction<{
			title: string;
			description: string;
			facebook: string;
			password: string;
		}>
	>
) => {
	setDescription({ ...description, [e.target.name]: e.target.value });
};
