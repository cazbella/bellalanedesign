import { useParams } from 'react-router-dom';

const mockDesigns = {
  1: { title: 'Floral Scrapbook Kit', description: 'A beautiful floral design kit.', etsyLink: 'https://etsy.com' },
  2: { title: 'Knitting Pattern Set', description: 'Patterns for knitting enthusiasts.', etsyLink: 'https://etsy.com' },
  3: { title: 'Geometric Pattern', description: 'Modern geometric design.', etsyLink: 'https://etsy.com' },
  4: { title: 'Abstract Art Print', description: 'Bold abstract artwork.', etsyLink: 'https://etsy.com' },
};

export default function DesignDetails() {
  const { id } = useParams();
  const design = mockDesigns[id];

  if (!design) return <h2>Design Not Found</h2>;

  return (
    <div className="design-details">
      <h2>{design.title}</h2>
      <p>{design.description}</p>
      <a href={design.etsyLink} target="_blank" rel="noopener noreferrer">
        Buy on Etsy
      </a>
    </div>
  );
}