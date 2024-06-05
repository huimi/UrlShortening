import Navbar from './components/navbar';
import Button from './components/button';
import History from './components/history';
import Card from './components/card';
import iw from './assets/illustration-working.svg';
import './styles/app.scss';


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
        <div className="form-container">
          <input className="form" placeholder="Shorten a link here..." />
          <Button page="shorten" text="Shorten It!"/>
        </div>
      </div>
      <div className="feature container">
        <History />
        <div className="title-container">
          <h1>Advanced Statistics</h1>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="card-container">
          <div className="line"></div>
          <Card />
        </div>
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
