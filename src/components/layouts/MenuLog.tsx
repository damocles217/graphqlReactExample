import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { defineLinksResponsive, defineResponsive } from "../design/Menu";
import LogOutUserGQL from "../graphql/LogOutUser";

const MenuLogLabel = ({ admin }: { admin?: boolean }): JSX.Element => {
	const [clickMenu, setClickMenu] = useState<number>(1);

	return (
		<Fragment>
			<div id="menu-label">
				<div
					id="drop-menu"
					className="icon-menu"
					onClick={() => {
						if (clickMenu === 1) {
							setClickMenu(0);
						} else {
							setClickMenu(1);
						}
					}}
				></div>

				<div id="dropped-menu" style={defineResponsive(clickMenu)}>
					<Link
						to="/"
						className="links-menu"
						onClick={() => {
							setClickMenu(1);
						}}
						style={defineLinksResponsive(clickMenu)}
					>
						Inicio
					</Link>
					<Link
						to="/aboutus"
						className="links-menu"
						onClick={() => {
							setClickMenu(1);
						}}
						style={defineLinksResponsive(clickMenu)}
					>
						¿Quienes somos?
					</Link>
					<Link
						to="/services"
						className="links-menu"
						onClick={() => {
							setClickMenu(1);
						}}
						style={defineLinksResponsive(clickMenu)}
					>
						Servicios
					</Link>
					<Link
						onClick={() => {
							setClickMenu(1);
						}}
						to="/privacypolicies"
						className="links-menu"
						style={defineLinksResponsive(clickMenu)}
					>
						Politicas de Privacidad
					</Link>
					<LogOutUserGQL clickMenu={clickMenu} />
					{admin && (
						<Link
							to="/admin"
							className="links-menu"
							onClick={() => {
								setClickMenu(1);
							}}
							style={defineLinksResponsive(clickMenu)}
						>
							Panel de administracion
						</Link>
					)}
				</div>
			</div>
		</Fragment>
	);
};

export default MenuLogLabel;
