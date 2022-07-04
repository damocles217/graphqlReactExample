import React, { Fragment } from "react";
import { useMutation } from "@apollo/client";
import { Response } from "../../types/user";
import { LOGIN_USER } from "../../graphql/mutations.gql";
import Preloader from "../layouts/Preloader";

const LoginUserGQL = ({ children }: { children: JSX.Element }): JSX.Element => {
	const [loginUser, { loading, data, error }] =
		useMutation<Response>(LOGIN_USER);

	const childrenWithProps = React.Children.map(children, (child) => {
		return React.cloneElement(child, {
			loginUser: loginUser,
			data: data,
		});
	});

	if (loading) return <Preloader />;
	if (error) return <p>Error {error.message}</p>;

	return <Fragment>{childrenWithProps}</Fragment>;
};

export default LoginUserGQL;
