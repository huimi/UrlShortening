import Button from './button';
import History from './history';

function Shorten() {
  return (
    <div className="shorten container">
      <div className="translate-wrapper">
        <div className="form-container">
          <input className="form" placeholder="Shorten a link here..." />
          <Button page="shorten" text="Shorten It!"/>
        </div>
        <History />
      </div>
    </div>
  );
}

export default Shorten;