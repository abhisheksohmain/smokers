import { business } from '../../data/siteData.js';
import './WhatsAppFloat.css';

export default function WhatsAppFloat() {
  return (
    <a className="wa-float" href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.2 14.8l-.4-.2-2.4.6.7-2.3-.2-.4A8 8 0 0 1 12 4zm-3 3.5c-.3 0-.6.2-.8.5-.4.6-.7 1.300-.2 2.500.9 2.200 2.700 4 5 4.900 1.400.6 2.300.4 2.900-.1.400-.3.700-.9.800-1.400 0-.2 0-.4-.2-.5l-1.900-.9c-.2-.1-.4 0-.6.200l-.7.800c-.1.100-.3.200-.5.100-1.100-.5-2.300-1.600-2.800-2.700-.1-.2 0-.4.100-.5l.5-.6c.1-.2.200-.4.100-.6l-.8-1.800c-.1-.2-.3-.3-.5-.3H9z"/></svg>
    </a>
  );
}
