import { Link } from 'react-router-dom';

const printDesigns = [
  { id: 3, title: 'Geometric Pattern', image: '/assets/print1.jpg' },
  { id: 4, title: 'Abstract Art Print', image: '/assets/print2.jpg' },
];

export default function PatternsPrints() {
  return (
    <div className="patterns-prints">
      <h2>Patterns & Prints</h2>
      <div className="design-grid">
        {printDesigns.map((design) => (
          <Link to={`/designs/${design.id}`} key={design.id}>
            <div className="design-card">
              <img src={design.image} alt={design.title} />
              <h3>{design.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}