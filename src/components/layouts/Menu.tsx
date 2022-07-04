import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { defineResponsive, defineLinksResponsive } from "../design/Menu";

const MenuLabel = (): JSX.Element => {
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
						to="/login"
						className="links-menu"
						onClick={() => {
							setClickMenu(1);
						}}
						style={defineLinksResponsive(clickMenu)}
					>
						Iniciar sesion
					</Link>
					<Link
						to="/signup"
						className="links-menu"
						onClick={() => {
							setClickMenu(1);
						}}
						style={defineLinksResponsive(clickMenu)}
					>
						Registrarse
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
				</div>
			</div>
		</Fragment>
	);
};

export default MenuLabel;
