import { useLazyQuery } from "@apollo/client";
import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { LOG_OUT } from "../../graphql/queries.gql";
import { defineLinksResponsive } from "../design/Menu";
import Preloader from "../layouts/Preloader";

const LogOutUserGQL = ({ clickMenu }: { clickMenu: number }): JSX.Element => {
	const [setLogOut, { data, error, loading }] = useLazyQuery(LOG_OUT);
	const setNavigate = useNavigate();

	if (loading) return <Preloader />;

	return (
		<Fragment>
			<button
				className="links-menu"
				id="logout-button"
				style={defineLinksResponsive(clickMenu)}
				onClick={async (e) => {
					const data = await setLogOut();
					setNavigate("/");
					location.reload();
				}}
			>
				Cerrar sesion
			</button>
		</Fragment>
	);
};

export default LogOutUserGQL;
