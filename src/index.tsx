import React from "react";
import { hydrateRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";

// Import context api
import { UserProvider } from "./context.api";

// Apollo client
import client from "./apollo/client.apollo";

// Import app
import App from "./components/App";

import "./sass/main.scss";
import "./assets/fonts/style.css";

const divRoot = document.querySelector("#root");

const child = (
	<ApolloProvider client={client}>
		<UserProvider>
			<App />
		</UserProvider>
	</ApolloProvider>
);

divRoot ? hydrateRoot(divRoot, child) : null;
