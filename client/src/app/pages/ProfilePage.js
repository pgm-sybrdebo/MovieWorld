import { BaseLayout } from '../layouts';
import { ProfileDetail } from '../components/profile';
import { useAuth } from '../contexts/firebase/auth.context';
import { Hero } from '../components/hero';
const heroImg = '/images/homeHero.png';

const ProfilePage = () => {
  const {currentUser} = useAuth();
  return (
    <BaseLayout>
      <Hero img={heroImg} title={`Hello ${currentUser.displayName}`} />
      <ProfileDetail />
    </BaseLayout>
  );
};

export default ProfilePage;