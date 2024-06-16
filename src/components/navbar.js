import Link from './link';
import Button from './button';
import Logo from '../assets/logo.svg';
import Menu from '../assets/menu.svg';
import { useState } from 'react';

function MobileMenu(){
  return(
    <div className="mobile-nav-wrap">
      <ul className="mobile-menu">
        <li><Link href="features" text="Features" /></li>
        <li><Link href="pricing" text="Pricing" /></li>
        <li><Link href="resources" text="Resources" /></li>
      </ul>
      <hr />
      <ul className="mobile-menu">
        <li><Link href="login" text="Login" /></li>
        <li><Button text="Sign Up" /></li>
      </ul>
    </div>
  );
}

function Navbar () {
  const [menu, setMenu] = useState(false);
  
  return (
    <nav>
      <img height="36" alt="Shortly" src={Logo} />
      <div className="nav-wrap">
        <ul className="menu">
          <li><Link href="features" text="Features" /></li>
          <li><Link href="pricing" text="Pricing" /></li>
          <li><Link href="resources" text="Resources" /></li>
        </ul>
        <ul className="menu">
          <li><Link href="login" text="Login" /></li>
          <li><Button text="Sign Up" /></li>
        </ul>
      </div>
      <Button className="hamburger icon-btn" 
        text={ <img height="28" alt="menu" src={ Menu } /> } 
        onClick={() => setMenu(prevM => !prevM)} 
        onBlur={() => setMenu(false)}
      />
      { menu && <MobileMenu /> }
    </nav>
  );
}

export default Navbar;