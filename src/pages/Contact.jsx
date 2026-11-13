import PageBanner from '../components/common/PageBanner.jsx';
import EnquiryForm from '../components/contact/EnquiryForm.jsx';
import FindUs from '../components/contact/FindUs.jsx';
import { images } from '../data/siteData.js';

// Contact page intentionally has fewer sections (banner, form, map).
export default function Contact() {
  return (
    <>
      <PageBanner title="Visit us" text="Book a table, ask about flavours or plan a private night." image={images.streetSign} />
      <EnquiryForm />
      <FindUs />
    </>
  );
}
