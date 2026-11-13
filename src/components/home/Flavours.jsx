
import { flavourFamilies } from '../../data/siteData.js';
import './Flavours.css';

const flavourIcons = [
  // FRUIT & FRESH
  <svg viewBox="0 0 48 48" fill="none">
    <path d="M25 14C23 7 29 5 34 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M25 14C15 8 6 16 9 27C11 36 18 41 25 39C33 42 40 34 40 25C40 17 33 11 25 14Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M25 14C29 9 34 10 37 12C34 17 29 18 25 14Z" fill="currentColor"/>
  </svg>,

  // COOL & MINTY
  <svg viewBox="0 0 48 48" fill="none">
    <path d="M24 5V43M7.5 14.5L40.5 33.5M40.5 14.5L7.5 33.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M24 5L19 11M24 5L29 11M24 43L19 37M24 43L29 37M7.5 14.5L15 15M7.5 14.5L10 22M40.5 14.5L33 15M40.5 14.5L38 22M7.5 33.5L15 33M7.5 33.5L10 26M40.5 33.5L33 33M40.5 33.5L38 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>,

  // SWEET & CREAMY
  <svg viewBox="0 0 48 48" fill="none">
    <path d="M9 18H39L36 39H12L9 18Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M9 18C9 12 17 12 18 17C20 9 29 9 30 17C34 11 40 14 39 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M17 25V32M24 24V34M31 25V32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>,

  // BOLD & SPICED
  <svg viewBox="0 0 48 48" fill="none">
    <path d="M25 5C27 13 39 18 38 29C37 38 31 43 23 42C14 41 9 34 11 26C12 19 19 15 20 9C24 14 24 18 23 22C29 18 29 12 25 5Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M24 25C28 30 32 34 27 39C22 43 16 38 18 33C19 30 22 28 24 25Z" fill="currentColor"/>
  </svg>,
];

export default function Flavours() {
  return (
    <section className="section flavours">
      <div className="wrap">

        {/* SECTION HEADING */}
        <div className="section-head">
          <span className="kicker">Flavours</span>

          <h2>Four families, endless blends</h2>

          <p>
            Not sure what to pick? Tell us what you usually enjoy
            and we will build a blend around it.
          </p>
        </div>

        {/* FLAVOUR CARDS */}
        <div className="grid grid-4 flavours__grid">

          {flavourFamilies.map((f, index) => (
            <article
              key={f.name}
              className="flavour card shine"
              style={{ '--tone': f.tone }}
            >

              {/* ICON */}
              <div className="flavour__icon">
                {flavourIcons[index]}
              </div>

              {/* TITLE */}
              <h3>{f.name}</h3>

              {/* FLAVOUR LIST */}
              <ul>
                {f.items.map((item) => (
                  <li key={item}>
                    <span className="flavour__bullet">
                      ✦
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
