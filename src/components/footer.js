import Link from './link';
import Logo from '../assets/white-logo.svg';

function Footer () {
  return (
    <footer className="footer container">
      <div className="logo">
        <img height="36" alt="logo" src={ Logo } />
      </div>
      <div className="footer-container">
        <div className="content-container">
          <h4>Features</h4>
          <ul>
            <li><Link page="shortening" text="Link Shortening" /></li>
            <li><Link page="branded" text="Branded Links" /></li>
            <li><Link page="analytics" text="Analytics" /></li>
          </ul>
        </div>
        <div className="content-container">
          <h4>Resources</h4>
          <ul>
            <li><Link page="blog" text="Blog" /></li>
            <li><Link page="developers" text="Developers" /></li>
            <li><Link page="support" text="Support" /></li>
          </ul>
        </div>
        <div className="content-container">
          <h4>Company</h4>
          <ul>
            <li><Link page="about" text="About" /></li>
            <li><Link page="team" text="Our Team" /></li>
            <li><Link page="careers" text="Careers" /></li>
            <li><Link page="contact" text="Contact" /></li>
          </ul>
        </div>
      </div>
      <div className="icon-container">
          <Link page="facebook" text={ <span className="icon icon-fb"></span> }/>
          <Link page="twitter" text={ <span className="icon icon-tt"></span> }/>
          <Link page="pinterest" text={ <span className="icon icon-pt"></span> }/>
          <Link page="instagram" text={ <span className="icon icon-ig"></span> }/>
      </div>
    </footer>
  )
}

export default Footer;