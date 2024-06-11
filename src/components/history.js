import Button from './button';
import { useState } from 'react';

function History({resultUrl}) {
  const [copy, setCopy] = useState("Copy");
  return (<>
    {resultUrl.map( (e, id) =>
      <div key={ id } className="history-container">
        <div className="url-container">{ e.longUrl }</div>
        <span className="url-right">{ e.shortenUrl }</span>
        <Button text={ copy } onFocus={() => setCopy("Copied!")} onBlur={() => setCopy("Copy")} />
      </div>
    )}
    </>);
}

export default History;