import React, { Fragment, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_POSTS } from "../graphql/queries.gql";
import Preloader from "../components/layouts/Preloader";
import PostContainer from "../components/PostContainer";

const HomePage = (): JSX.Element => {
	const [list, setList] = useState<number>(0);
	const [posts, setPosts] = useState<Array<Post>>([]);
	let posting: Array<Post> = [];

	const [getPosts, { error, loading }] = useLazyQuery(GET_POSTS);

	const sendData = async () => {
		const data = await getPosts({ variables: { list } });
		const newData = data.data;
		posting = newData.getPosts;

		if (posting.length > 0) setPosts([...posts, ...posting]);
	};

	useEffect(() => {
		const scrolling = () => {
			const body = document.querySelector("body");
			const positionY = window.scrollY + window.innerHeight;
			const scroller = body?.scrollHeight;
			// total height of screen

			if (positionY == scroller) {
				sendData();
				setList(list + 1);
			}
		};

		const body = document.querySelector("body");
		const positionY = window.scrollY + window.innerHeight;
		const scroller = body?.scrollHeight;
		if (positionY == scroller) sendData();
		window.addEventListener("scroll", scrolling);
		return () => {
			window.removeEventListener("scroll", scrolling);
		};
	}, [list]);

	if (loading && posting.length != 0) return <Preloader />;
	if (error) return <p>Error {error.message}</p>;

	return (
		<Fragment>
			<div className="page-content" suppressContentEditableWarning={true}>
				<h2>Noticias {";)"}</h2>
				{posts?.map((post, index) => {
					return <PostContainer key={index} post={post} keyDup={index} />;
				})}
			</div>
		</Fragment>
	);
};

export default HomePage;
