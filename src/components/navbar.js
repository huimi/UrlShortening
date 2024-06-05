import Link from './link';
import Button from './button';
import Logo from '../assets/logo.svg';

function Navbar () {
  return (
    <nav>
      <img height="36" alt="Shortly" src={Logo} />
      <div className="nav-wrap">
        <ul className="menu">
          <li><Link page="features" text="Features" /></li>
          <li><Link page="pricing" text="Pricing" /></li>
          <li><Link page="resources" text="Resources" /></li>
        </ul>
        {/* <hr className=""> */}
        <ul className="menu">
          <li><Link page="login" text="Login" /></li>
          <li><Button page="signup" text="Sign Up" /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;