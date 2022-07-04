import React, { Fragment } from "react";
import CreatePostGQL from "./graphql/CreatePost";
import PostCreate from "./PostCreate";

const PostService = () => {
	return (
		<Fragment>
			<CreatePostGQL>
				<PostCreate />
			</CreatePostGQL>
		</Fragment>
	);
};

export default PostService;
