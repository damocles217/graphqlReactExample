import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useQuery } from "@apollo/client";

// Pages imports
import HomePage from "../pages/HomePage";
import SignupPage from "../pages/SignupPage";
import { IS_LOGED } from "../graphql/queries.gql";
import { IsLoged } from "../types/log";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import ServicesPage from "../pages/ServicesPage";
import MenuLabel from "./layouts/Menu";
import MenuLogLabel from "./layouts/MenuLog";
import Preloader from "./layouts/Preloader";
import DashboardPage from "../pages/Dashboard";

const App = (): JSX.Element => {
	const { data, loading, error } = useQuery<IsLoged>(IS_LOGED, {
		//TODO setting up headers necesary for streaming
		context: { headers: { max: "selected" } },
	});

	if (loading) return <Preloader />;

	return (
		<Fragment>
			<BrowserRouter>
				{data?.isLoged.log === false ? (
					<Fragment>
						<MenuLabel />
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/login" element={<LoginPage />} />
							<Route path="/signup" element={<SignupPage />} />
							<Route path="/services" element={<ServicesPage />} />
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</Fragment>
				) : (
					<Fragment>
						<MenuLogLabel admin={data?.isLoged.admin} />
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/services" element={<ServicesPage />} />
							{data?.isLoged.admin && (
								<Route path="/admin" element={<DashboardPage />} />
							)}
							<Route path="*" element={<NotFoundPage />} />
						</Routes>
					</Fragment>
				)}
			</BrowserRouter>
		</Fragment>
	);
};

export default App;
