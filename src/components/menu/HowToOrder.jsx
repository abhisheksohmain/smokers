import './HowToOrder.css';

// Real sequence, so numbering is appropriate.
const steps = [
  { t: 'Sit anywhere that is free', d: 'Pick a sofa that suits your group size.' },
  { t: 'Tell us your flavour', d: 'Name a flavour, or describe what you like and we will suggest a blend.' },
  { t: 'Add drinks if you want', d: 'Tea, coffee and cold drinks come from the cafe counter.' },
  { t: 'Enjoy and ask for fresh coals', d: 'Wave us over any time your hookah needs a refresh.' },
];

export default function HowToOrder() {
  return (
    <section className="section how">
      <div className="wrap">
        <div className="section-head center">
          <span className="kicker">First visit?</span>
          <h2>How ordering works</h2>
        </div>
        <ol className="how__row">
          {steps.map((s, i) => (
            <li key={s.t} className="how__step card shine">
              <span className="how__num copper-text">{i + 1}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
