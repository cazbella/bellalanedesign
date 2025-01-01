import { Link } from 'react-router-dom';

export default function Designs() {
  return (
    <div className="designs">
      <h2>Our Designs</h2>
      <div className="design-links">
        <Link to="/designs/craft-hobby">Craft & Hobby</Link>
        <Link to="/designs/patterns-prints">Patterns & Prints</Link>
      </div>
    </div>
  );
}