import Button from './button';

function History() {
  return (
    <div className="history-container">
      <div className="url-container">https://frontendmentorio.com</div>
      <span className="url-right">https://rel.ink/aBcdE1</span>
      <Button page="copy" text="Copy"/>
    </div>
  );
}

export default History;