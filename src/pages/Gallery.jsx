import PageBanner from '../components/common/PageBanner.jsx';
import GalleryGrid from '../components/gallery/GalleryGrid.jsx';
import FeatureDetail from '../components/gallery/FeatureDetail.jsx';
import Interior from '../components/gallery/Interior.jsx';
import ProcessStrip from '../components/gallery/ProcessStrip.jsx';
import ShareMoment from '../components/gallery/ShareMoment.jsx';
import CTABand from '../components/common/CTABand.jsx';
import { images } from '../data/siteData.js';

export default function Gallery() {
  return (
    <>
      <PageBanner title="Gallery" text="A look at the hookahs, the coals and the room." image={images.torchLight} />
      <GalleryGrid />
      <FeatureDetail />
      <Interior />
      <ProcessStrip />
      <ShareMoment />
      <CTABand title="See it in person" text="Photos are good. Sitting on the sofa is better." />
    </>
  );
}
