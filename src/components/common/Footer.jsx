import { Link } from 'react-router-dom';
import { navLinks, images, business } from '../../data/siteData.js';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__grid">
        <div>
          <img className="site-footer__logo" src={images.logo} alt={business.name} />
          <p>A warm Arabic-style sheesha lounge in the heart of Lakemba. Slow evenings, fresh coals, good company.</p>
        </div>
        <div>
          <h4>Explore</h4>
          {navLinks.map((l) => <Link key={l.to} to={l.to}>{l.label}</Link>)}
        </div>
        <div>
          <h4>Find us</h4>
          <p>{business.address}</p>
          <a href={`tel:${business.phoneTel}`}>{business.phoneDisplay}</a>
          <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer">Message on WhatsApp</a>
        </div>
      </div>
      <div className="wrap site-footer__bottom">
        <span>&copy; {new Date().getFullYear()} {business.name}. All rights reserved.</span>
        <span>Sheesha is for adults only. Smoking harms your health.</span>
      </div>
    </footer>
  );
}
