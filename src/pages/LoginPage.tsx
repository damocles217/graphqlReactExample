import React, { Fragment } from "react";
import LoginUserGQL from "../components/graphql/LoginUser";
import LoginForm from "../components/LoginForm";

const LoginPage = (): JSX.Element => {
	return (
		<Fragment>
			<div className="page-content">
				<LoginUserGQL>
					<LoginForm />
				</LoginUserGQL>
			</div>
		</Fragment>
	);
};

export default LoginPage;
