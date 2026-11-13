import PageBanner from '../components/common/PageBanner.jsx';
import Packages from '../components/menu/Packages.jsx';
import FlavourMenu from '../components/menu/FlavourMenu.jsx';
import Drinks from '../components/menu/Drinks.jsx';
import CoalsFeature from '../components/menu/CoalsFeature.jsx';
import HowToOrder from '../components/menu/HowToOrder.jsx';
import CTABand from '../components/common/CTABand.jsx';
import { images } from '../data/siteData.js';

export default function Menu() {
  return (
    <>
      <PageBanner title="Sheesha & menu" text="Hookah sessions, flavours and drinks, all in one place." image={images.hookahDetail} />
      <Packages />
      <FlavourMenu />
      <Drinks />
      <CoalsFeature />
      <HowToOrder />
      <CTABand title="Ready to order?" text="Message us your group size and preferred flavour and we will have your table set." />
    </>
  );
}
