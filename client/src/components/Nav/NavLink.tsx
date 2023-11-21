import React from "react";
import type { NavLinkProps } from "../../interfaces/homePage";

const NavLink: React.FC<NavLinkProps> = ({ href = "#", text, style = "" }) => {
	return (
		<a href={href} className={style}>
			{text}
		</a>
	);
};

export default NavLink;