import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../../graphql/mutations.gql";
import React, { Fragment } from "react";
import Preloader from "../layouts/Preloader";

const CreatePostGQL = ({
	children,
}: {
	children: JSX.Element;
}): JSX.Element => {
	const [createPost, { data, loading, error }] = useMutation(CREATE_POST);

	const childrenWithProps = React.Children.map(children, (child) => {
		return React.cloneElement(child, {
			createPost: createPost,
			data: data,
		});
	});

	if (loading) return <Preloader />;
	if (error) return <p>Error {error.message}</p>;

	return <Fragment>{childrenWithProps}</Fragment>;
};

export default CreatePostGQL;
