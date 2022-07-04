import { CSSProperties } from "react";

export const stylePhone: CSSProperties = {
	display: "flex",
	position: "fixed",
	flexDirection: "column",
	justifyContent: "flex-start",
	marginTop: "6vh",
	width: "100%",
	height: "94%",
	top: 0,
	left: 0,
	backgroundColor: "#000",
};

export const stylePhoneHidden: CSSProperties = {
	display: "none",
};

export const styleTablet: CSSProperties = {
	display: "flex",
	position: "fixed",
	flexDirection: "column",
	justifyContent: "flex-start",
	marginTop: "6vh",
	width: "50%",
	height: "94%",
	top: "0",
	left: "0",
	backgroundColor: "#000",
	zIndex: "-moz-initial",
};

export const styleTabletHidden: CSSProperties = {
	display: "none",
};

export const stylePc: CSSProperties = {
	display: "flex",
	width: "60%",
	height: "100%",
	justifyContent: "center",
	alignItems: "center",
};

export const stylePcHidden: CSSProperties = {
	display: "none",
};

export const styleLinks: CSSProperties = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	width: "100%",
	height: "8%",
	cursor: "pointer",
	color: "white",
	backgroundColor: "transparent",
	borderStyle: "none",
	fontSize: "0.9em",
	margin: 0,
};

const styleNormalLink: CSSProperties = {
	cursor: "pointer",
	color: "white",
	backgroundColor: "transparent",
	borderStyle: "none",
	fontSize: "1.2em",
	marginLeft: "2%",
};

export const defineResponsive = (
	clickMenu: number
): CSSProperties | undefined =>
	window.innerWidth > 1580
		? stylePc
		: window.innerWidth <= 1580 && window.innerWidth > 480 && clickMenu === 0
		? styleTablet
		: window.innerWidth <= 1580 && window.innerWidth > 480 && clickMenu === 1
		? stylePc
		: window.innerWidth <= 480 && clickMenu === 0
		? stylePhone
		: window.innerWidth <= 480 && clickMenu === 1
		? stylePc
		: stylePhone;

export const defineLinksResponsive = (
	clickMenu: number
): CSSProperties | undefined =>
	window.innerWidth > 1580
		? styleNormalLink
		: window.innerWidth <= 480 && clickMenu === 0
		? styleLinks
		: window.innerWidth <= 1580 && window.innerWidth > 480 && clickMenu === 0
		? styleLinks
		: undefined;
