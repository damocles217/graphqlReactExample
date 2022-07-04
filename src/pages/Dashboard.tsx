import React, { Fragment, useState } from "react";
import MenuDashboard from "../components/MenuDashboard";
import PostService from "../components/PostService";
import "suneditor/dist/css/suneditor.min.css";

const DashboardPage = (): JSX.Element => {
	const [menu, setMenu] = useState<number>(0);

	return (
		<Fragment>
			<div className="page-content">
				<MenuDashboard setMenu={setMenu} />
				{menu === 0 ? (
					<PostService />
				) : menu === 1 ? (
					<p>Usuarios</p>
				) : (
					<p>Cursos</p>
				)}
			</div>
		</Fragment>
	);
};

export default DashboardPage;
