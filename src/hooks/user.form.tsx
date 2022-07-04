import { ChangeEvent, Dispatch, FormEvent, SetStateAction } from "react";
import { NavigateFunction } from "react-router-dom";
import { InputFormSubmit, LoginInputForm } from "../types/form";
import { User } from "../types/user";

export const handleSubmitSignup = async (
	e: FormEvent<HTMLFormElement>,
	sendData: any,
	data: User,
	form: InputFormSubmit | LoginInputForm,
	setNavigate: NavigateFunction
): Promise<void> => {
	e.preventDefault();
	const newData = await sendData({
		variables: { ...form },
	});

	if (newData.data && newData.data.loginUser && newData.data.loginUser.sucess) {
		setNavigate("/");
		location.reload();
	}
	if (
		newData.data &&
		newData.data.createUser &&
		newData.data.createUser.sucess
	) {
		setNavigate("/");
		location.reload();
	}
};

export const handleChangeSignup = async (
	e: ChangeEvent<HTMLInputElement>,
	setForm: Dispatch<
		SetStateAction<InputFormSubmit | LoginInputForm | any | undefined>
	>,
	form: InputFormSubmit | LoginInputForm | undefined
): Promise<void> => {
	setForm({ ...form, [e.target.name]: e.target.value });
};
