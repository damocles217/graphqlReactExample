import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { handleChangeSignup, handleSubmitSignup } from "../hooks/user.form";
import { InputFormSubmit } from "../types/form";
import { useNavigate } from "react-router-dom";

const SignupForm = (props): JSX.Element => {
	// eslint-disable-next-line react/prop-types
	const { createUser, data } = props;
	const setNavigate = useNavigate();

	const [form, setForm] = useState<InputFormSubmit>({
		name: "",
		lastname: "",
		email: "",
		password: "",
	});

	return (
		<Fragment>
			<div className="forms-signup">
				<div className="image-container">
					<img />
				</div>
				<form
					onSubmit={(e) =>
						handleSubmitSignup(e, createUser, data, form, setNavigate)
					}
					className="forms-fill"
				>
					<input
						type="text"
						name="name"
						value={form.name}
						placeholder="Nombre"
						onChange={(e) => handleChangeSignup(e, setForm, form)}
						className="inputs"
					/>
					<input
						type="text"
						name="lastname"
						value={form.lastname}
						placeholder="Apellido"
						onChange={(e) => handleChangeSignup(e, setForm, form)}
						className="inputs"
					/>
					<input
						type="email"
						name="email"
						value={form.email}
						placeholder="Correo"
						onChange={(e) => handleChangeSignup(e, setForm, form)}
						className="inputs"
					/>
					<input
						type="password"
						name="password"
						value={form.password}
						placeholder="Contraseña"
						onChange={(e) => handleChangeSignup(e, setForm, form)}
						className="inputs"
					/>
					<input
						type="password"
						name="password"
						value={form.password}
						placeholder="Contraseña"
						onChange={(e) => handleChangeSignup(e, setForm, form)}
						className="inputs"
					/>
					<div className="send">
						<button type="submit">Registrarse</button>
						<Link to="/login">Iniciar sesion</Link>
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default SignupForm;
