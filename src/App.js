import Navbar from './components/navbar';
import Button from './components/button';
import iw from './assets/illustration-working.svg';

function App() {
  return (
    <div className="content">
      <div className="main container">
        <Navbar />
        <div className="introduction">
          <div className="title-container">
            <h1>More than just shorter links</h1>
            <p>Build your brand’s recognition and get detailed insights 
            on how your links are performing.</p>
            <Button page="signup" text="Get Started"/>
          </div>
          <img id="mainSvg" alt="iullstration-workding" src={iw} />
        </div>
      </div>
      <div className="container feature">
        <div className="form-container">
          <input className="form" placeholder="Shorten a link here..." />
          <Button page="shorten" text="Shorten It!"/>
        </div>
        <div className="record-container">
          <div className="record">
            <div>https://frontendmentorio.com</div>
            <div>
              <div>https://rel.ink/aBcdE1</div>
              <Button page="copy" text="Copy"/>
            </div>
          </div>
        </div>
        <div className="title-container text-center">
          <h1>Advanced Statistics</h1>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        {/* <input className="url-form"></input> */}
        {/* <Button text={"Shorten It!"} /> */}
      </div>
      <div className="container">
        <h3>Advance Statistics</h3>
        <span className="subtitle">Track how your links are performing across the web with our advanced statistics dashboard.</span>
      </div>
      <div className="container">
        <h3>Boost your links today</h3>
        {/* <Button text={"Get Started"} /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
