import { packages } from '../../data/siteData.js';
import Button from '../common/Button.jsx';
import { business } from '../../data/siteData.js';
import './Packages.css';

export default function Packages() {
  return (
    <section className="section packages">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Sessions</span>
          <h2>Choose how you sit</h2>
          <p>Ask our team for current prices. They can change with flavour and group size.</p>
        </div>
        <div className="packages__list">
          {packages.map((p) => (
            <article key={p.id} className="package card shine">
              <img src={p.img} alt={p.name} loading="lazy" />
              <div className="package__body">
                <h3>{p.name}</h3>
                <p>{p.note}</p>
                <span className="package__who">{p.who}</span>
                <Button href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in the ${p.name}.`)}`} variant="ghost">Ask about this</Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
