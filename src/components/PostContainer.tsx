import React, { Fragment } from "react";
import parser, { attributesToProps } from "html-react-parser";

const PostContainer = ({
	post,
	keyDup,
}: {
	post: Post;
	keyDup: number;
}): JSX.Element => {
	const options = {
		replace: async (domNode) => {
			if (domNode.name === "img") {
				const props = attributesToProps(domNode.attribs);

				// eslint-disable-next-line react/prop-types
				return <img className="image-container" {...props} alt={props.title} />;
			}
			if (domNode.name === "div") {
				const props = attributesToProps(domNode.attribs);
				// eslint-disable-next-line react/prop-types
				return (
					<div
						{...props}
						key={keyDup}
						contentEditable
						suppressContentEditableWarning={true}
					></div>
				);
			}
		},
	};
	return (
		<Fragment>
			<div className="post-container" suppressContentEditableWarning={true}>
				<h3>{post.title}</h3>
				<div className="image-container" suppressContentEditableWarning={true}>
					<img src={post.facebook} />
				</div>
				<h4>{post.createdAt.toString()}</h4>
				<p>{post.description}</p>
				<div className="post-content" suppressContentEditableWarning={true}>
					{parser(post.content, options)}
				</div>
			</div>
			<hr />
		</Fragment>
	);
};

export default PostContainer;
