import React, { Dispatch, Fragment, SetStateAction, useState } from "react";
import { selectMenuHandler } from "../hooks/dashboard.menu";

const MenuDashboard = ({
	setMenu,
}: {
	setMenu: Dispatch<SetStateAction<number>>;
}): JSX.Element => {
	return (
		<Fragment>
			<div id="dashboardMenu">
				<button onClick={() => selectMenuHandler(0, setMenu)}>Posts</button>
				<button onClick={() => selectMenuHandler(1, setMenu)}>Usuarios</button>
				<button onClick={() => selectMenuHandler(2, setMenu)}>Cursos</button>
			</div>
		</Fragment>
	);
};

export default MenuDashboard;
