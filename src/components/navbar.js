import Link from './link';
import Button from './button';
import Logo from '../assets/logo.svg';

function Navbar () {
  return (
    <nav>
      <img height="36" alt="Shortly" src={Logo} />
      <div className="nav-wrap">
        <ul className="menu">
          <li><Link href="features" text="Features" /></li>
          <li><Link href="pricing" text="Pricing" /></li>
          <li><Link href="resources" text="Resources" /></li>
        </ul>
        {/* <hr className=""> */}
        <ul className="menu">
          <li><Link href="login" text="Login" /></li>
          <li><Button text="Sign Up" /></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;