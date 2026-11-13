import { Link } from 'react-router-dom';
import './Button.css';

// Renders a router link, an external link or a button, all with the same shine effect.
export default function Button({ to, href, children, variant = 'solid', ...rest }) {
  const cls = `btn btn--${variant} shine`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} target="_blank" rel="noreferrer" {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}
