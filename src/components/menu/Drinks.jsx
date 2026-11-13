import { sampleDrinks } from '../../data/siteData.js';
import './Drinks.css';

export default function Drinks() {
  return (
    <section className="section drinks">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Cafe & drinks</span>
          <h2>Something to sip while the coals glow</h2>
        </div>
        <div className="grid grid-4">
          {sampleDrinks.map((d) => (
            <article key={d.name} className="drink card shine">
              <h3>{d.name}</h3>
              <p>{d.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
