import Logo from "../../../assets/images/agilize-logo.png";
import StyledLink from "../StyledLink";

const NavBar = () => (
  <nav className="border-b-2 border-gold p-4 bg-white">
    <div className="flex justify-between">
      <div className="Logo">
        <img width={160} src={Logo} alt="Agilize Logo" />
      </div>
      <div className="links flex">
        <ul className="flex items-center">
          <li className="px-4">
            <StyledLink to="/">Goal Tracker</StyledLink>
          </li>
          <li className="px-4">
            <StyledLink to="/about">About</StyledLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default NavBar;
