import {
	ApolloClient,
	InMemoryCache,
	createHttpLink,
	ApolloLink,
} from "@apollo/client";

const link: ApolloLink = createHttpLink({
	uri: "http://192.168.1.67:3000/graphql",
	credentials: "include",
});

const client = new ApolloClient({
	link: link,
	cache: new InMemoryCache(),
});

export default client;
