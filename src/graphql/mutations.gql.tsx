import { gql } from "@apollo/client";

export const CREATE_USER = gql`
	mutation CreateUser(
		$name: String!
		$lastname: String!
		$email: String!
		$password: String!
	) {
		createUser(
			userInput: {
				name: $name
				lastname: $lastname
				email: $email
				password: $password
			}
		) {
			user {
				name
				lastname
			}
			errors {
				message
				path
			}
			sucess
		}
	}
`;

export const LOGIN_USER = gql`
	mutation LoginUser($email: String!, $password: String!) {
		loginUser(loginInput: { email: $email, password: $password }) {
			user {
				name
				lastname
			}
			errors {
				message
				path
			}
			sucess
		}
	}
`;

export const CREATE_POST = gql`
	mutation CreatePost(
		$content: String!
		$description: String!
		$facebook: String
		$password: String!
		$title: String!
	) {
		createPost(
			createPost: {
				content: $content
				description: $description
				facebook: $facebook
				password: $password
				title: $title
			}
		) {
			content
		}
	}
`;
