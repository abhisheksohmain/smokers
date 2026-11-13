import { reviews } from '../../data/siteData.js';
import './Reviews.css';

export default function Reviews() {
  return (
    <section className="section reviews">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">Guest words</span>
          <h2>What the table says</h2>
        </div>
        <div className="grid grid-3">
          {reviews.map((r, idx) => (
            <blockquote key={idx} className="review card shine">
              <div className="review__stars" aria-label={`${r.rating} out of 5 stars`}>{'\u2605'.repeat(r.rating)}</div>
              <p>{r.text}</p>
              <cite>{r.name}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
