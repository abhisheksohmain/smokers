import PageBanner from '../components/common/PageBanner.jsx';
import Story from '../components/about/Story.jsx';
import Values from '../components/about/Values.jsx';
import CraftSteps from '../components/about/CraftSteps.jsx';
import LoungeFeatures from '../components/about/LoungeFeatures.jsx';
import PromiseQuote from '../components/about/PromiseQuote.jsx';
import CTABand from '../components/common/CTABand.jsx';
import { images } from '../data/siteData.js';

export default function About() {
  return (
    <>
      <PageBanner title="Our story" text="A lounge built for long conversations, good smoke and an easy evening." image={images.lounge} />
      <Story />
      <Values />
      <CraftSteps />
      <LoungeFeatures />
      <PromiseQuote />
      <CTABand />
    </>
  );
}
