import { gql } from "@apollo/client";

export const IS_LOGED = gql`
	query IsLoged {
		isLoged {
			log
			admin
		}
	}
`;

export const GET_POSTS = gql`
	query GetPosts($list: Float!){
		getPosts(list: $list) {
			facebook
			content
			title
			description
			_id
			owner
			createdAt
		}
	}
`;

export const LOG_OUT = gql`
	query LogOut {
		logOut
	}
`;
