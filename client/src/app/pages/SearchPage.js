import { BaseLayout } from '../layouts';
import {Hero} from '../components/hero';
import { ResultList } from '../components/results';
const heroImg = '/images/homeHero.png';
const title= 'Search';

const SearchPage = () => {
  
  return (
    <BaseLayout>
      <Hero img={heroImg} title={title}/>
      <ResultList></ResultList>
    </BaseLayout>
  );
};

export default SearchPage;