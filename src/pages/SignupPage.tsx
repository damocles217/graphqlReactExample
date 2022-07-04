import React, { Fragment } from "react";
import CreateUserGQL from "../components/graphql/CreateUser";
import SignupForm from "../components/SignupForm";

const SignupPage = (): JSX.Element => {
	return (
		<Fragment>
			<div className="page-content">
				<CreateUserGQL>
					<SignupForm />
				</CreateUserGQL>
			</div>
		</Fragment>
	);
};

export default SignupPage;
