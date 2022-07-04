import { useMutation } from "@apollo/client";
import React, { Fragment } from "react";
import { CREATE_USER } from "../../graphql/mutations.gql";
import { Response } from "../../types/user";
import Preloader from "../layouts/Preloader";

const CreateUserGQL = ({
	children,
}: {
	children: JSX.Element;
}): JSX.Element => {
	const [createUser, { data, loading, error }] =
		useMutation<Response>(CREATE_USER);

	const childrenWithProps = React.Children.map(children, (child) => {
		return React.cloneElement(child, {
			createUser: createUser,
			data: data,
		});
	});

	if (loading) return <Preloader />;
	if (error) return <p>Error {error.message}</p>;

	return <Fragment>{childrenWithProps}</Fragment>;
};

export default CreateUserGQL;
