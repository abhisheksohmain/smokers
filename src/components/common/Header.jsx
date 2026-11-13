import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navLinks, images, business } from '../../data/siteData.js';
import Button from './Button.jsx';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap site-header__bar">
        <Link to="/" className="site-header__logo" onClick={() => setOpen(false)} aria-label={`${business.name} home`}>
          <img src={images.logo} alt={`${business.name} ${business.tagline}`} />
        </Link>
        <nav className={`site-header__nav ${open ? 'is-open' : ''}`} aria-label="Main">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setOpen(false)}
              className={({ isActive }) => `site-header__link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
          <Button href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hi, I would like to book a table at The Smoke Hauz.')}`}>Book a table</Button>
        </nav>
        <button className={`site-header__burger ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
