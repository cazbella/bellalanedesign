import { Link } from 'react-router-dom';

const craftDesigns = [
  { id: 1, title: 'Floral Scrapbook Kit', image: '/assets/craft1.jpg' },
  { id: 2, title: 'Knitting Pattern Set', image: '/assets/craft2.jpg' },
];

export default function CraftHobby() {
  return (
    <div className="craft-hobby">
      <h2>Craft & Hobby Designs</h2>
      <div className="design-grid">
        {craftDesigns.map((design) => (
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