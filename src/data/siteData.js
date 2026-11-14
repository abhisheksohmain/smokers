import hookahDetail from '../assets/images/1.png';
import coalsBowl from '../assets/images/4.png';
import hookahRed from '../assets/images/3.png';
import torchLight from '../assets/images/2.png';
import streetSign from '../assets/images/street-sign.png';
import lounge from '../assets/images/4.png';
import logo from '../assets/images/logo.png';

// ---------- EDIT YOUR BUSINESS DETAILS HERE ----------
export const business = {
  name: 'The Smoke Hauz',
  tagline: 'Sheesha Lounge',
  address: '83 Haldon Street, Lakemba NSW 2195',
  phoneDisplay: '+61 415 694 109',
  phoneTel: '+61415694109',
  whatsapp: '61415694109', // country code + number, no + or spaces
  hours: 'Opening hours: please message us on WhatsApp to confirm today\u2019s time.', // TODO: replace with real hours
  mapQuery: '83 Haldon Street, Lakemba NSW 2195',
  instagram: '#', // TODO: add your Instagram link
};

export const images = { hookahDetail, coalsBowl, hookahRed, torchLight, streetSign, lounge, logo };

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'Our Story' },
  { to: '/menu', label: 'Sheesha & Menu' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Visit Us' },
];

export const packages = [
  { id: 'classic', name: 'Classic Session', note: 'One hookah, one flavour, fresh coals on request.', who: 'Best for 1 to 2 people', img: hookahRed },
  { id: 'signature', name: 'Signature Blend', note: 'Two flavours mixed by our staff, served with a clean bowl.', who: 'Best for 2 to 3 people', img: hookahDetail },
  { id: 'group', name: 'Group Table', note: 'A shared hookah on a full majlis sofa, plus table service.', who: 'Best for 4 to 8 people', img: lounge },
  { id: 'private', name: 'Private Booking', note: 'Reserve the lounge for birthdays, farewells and family nights.', who: 'Ask us for a quote', img: torchLight },
];

export const flavourFamilies = [
  { name: 'Fruit & Fresh', items: ['Double apple', 'Watermelon mint', 'Grape', 'Peach'], tone: '#e0795a' },
  { name: 'Cool & Minty', items: ['Mint', 'Lemon mint', 'Blueberry mint', 'Ice melon'], tone: '#7fc6b4' },
  { name: 'Sweet & Creamy', items: ['Vanilla', 'Caramel', 'Cream', 'Cinnamon roll'], tone: '#e8b49a' },
  { name: 'Bold & Spiced', items: ['Cardamom', 'Mixed berries', 'Pomegranate', 'Rose'], tone: '#b3263a' },
];

export const sampleDrinks = [
  { name: 'Fresh mint tea', desc: 'Served hot in a small pot, made for sharing.' },
  { name: 'Arabic coffee', desc: 'Light roast with cardamom, poured fresh.' },
  { name: 'Cold mocktails', desc: 'Lemon mint, watermelon and passionfruit.' },
  { name: 'Cafe favourites', desc: 'Coffee, soft drinks and sweet bites from the cafe.' },
];

// SAMPLE TEXT ONLY: replace with real customer reviews before going live.
export const reviews = [
  { name: 'Guest review', text: 'Comfortable majlis seating, a clean hookah and staff who actually check on your coals. A proper lounge.', rating: 5 },
  { name: 'Guest review', text: 'We booked a table for a family night. Easy to arrange on WhatsApp and the table was ready on time.', rating: 5 },
  { name: 'Guest review', text: 'The lighting and the copper details make it feel like a different city. The mint blend was perfect.', rating: 5 },
];
