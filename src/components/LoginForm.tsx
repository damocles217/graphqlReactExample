import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleChangeSignup, handleSubmitSignup } from "../hooks/user.form";
import { LoginInputForm } from "../types/form";

import { Link } from "react-router-dom";

const LoginForm = (props): JSX.Element => {
	// eslint-disable-next-line react/prop-types
	const { loginUser, data } = props;
	const setNavigate = useNavigate();
	const [form, setForm] = useState<LoginInputForm>({
		email: "",
		password: "",
	});

	return (
		<Fragment>
			<div className="forms">
				<div className="image-container">
					<img />
				</div>
				<form
					className="forms-fill"
					onSubmit={(e) =>
						handleSubmitSignup(e, loginUser, data, form, setNavigate)
					}
				>
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
					<div className="send">
						<button type="submit">Iniciar sesion</button>
						<Link to="/signup">Registrate</Link>
					</div>
				</form>
			</div>
		</Fragment>
	);
};

export default LoginForm;
