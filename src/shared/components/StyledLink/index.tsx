import { NavLink, NavLinkProps } from "react-router-dom";

const StyledLink = (props: NavLinkProps) => (
  <NavLink
    className="text-darkGold hover:text-gold [active]:text-brown"
    {...props}
    to={props.to}
  >
    {props.children}
  </NavLink>
);

export default StyledLink;
