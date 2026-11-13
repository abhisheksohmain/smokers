import HeroSlider from '../components/home/HeroSlider.jsx';
import Welcome from '../components/home/Welcome.jsx';
import Experiences from '../components/home/Experiences.jsx';
import Flavours from '../components/home/Flavours.jsx';
import Ambience from '../components/home/Ambience.jsx';
import Reviews from '../components/home/Reviews.jsx';
import VisitCTA from '../components/home/VisitCTA.jsx';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <Welcome />
      <Experiences />
      <Flavours />
      <Ambience />
      <Reviews />
      <VisitCTA />
    </>
  );
}
