import React from "react";
import { render } from "react-dom";
import { ApolloProvider } from "@apollo/client";

// Import context api
import { UserProvider } from "./context.api";

// Apollo client
import client from "./apollo/client.apollo";

// Import app
import App from "./components/App";

import "./sass/main.scss";
import "./assets/fonts/style.css";

render(
	<ApolloProvider client={client}>
		<UserProvider>
			<App />
		</UserProvider>
	</ApolloProvider>,
	document.querySelector("#root")
);
