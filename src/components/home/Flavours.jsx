import { flavourFamilies } from '../../data/siteData.js';
import './Flavours.css';

export default function Flavours() {
  return (
    <section className="section flavours">
      <div className="wrap">
        <div className="section-head">
          <span className="kicker">Flavours</span>
          <h2>Four families, endless blends</h2>
          <p>Not sure what to pick? Tell us what you usually enjoy and we will build a blend around it.</p>
        </div>
        <div className="grid grid-4">
          {flavourFamilies.map((f) => (
            <article key={f.name} className="flavour card shine" style={{ '--tone': f.tone }}>
              <span className="flavour__dot" />
              <h3>{f.name}</h3>
              <ul>{f.items.map((it) => <li key={it}>{it}</li>)}</ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
