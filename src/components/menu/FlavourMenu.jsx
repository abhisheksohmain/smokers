import { useState } from 'react';
import { flavourFamilies } from '../../data/siteData.js';
import './FlavourMenu.css';

export default function FlavourMenu() {
  const [active, setActive] = useState(0);
  const f = flavourFamilies[active];
  return (
    <section className="section section--alt flavour-menu">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">Flavour list</span>
          <h2>Tap a family to see the flavours</h2>
        </div>
        <div className="flavour-menu__tabs" role="tablist">
          {flavourFamilies.map((x, i) => (
            <button key={x.name} role="tab" aria-selected={i === active} className={`flavour-menu__tab shine ${i === active ? 'is-active' : ''}`} onClick={() => setActive(i)}>{x.name}</button>
          ))}
        </div>
        <div className="flavour-menu__panel card shine" style={{ '--tone': f.tone }} key={f.name}>
          {f.items.map((it) => (
            <div key={it} className="flavour-menu__item"><span /> {it}</div>
          ))}
        </div>
        <p className="flavour-menu__note">Flavour availability changes. Message us to check what is in stock today.</p>
      </div>
    </section>
  );
}
