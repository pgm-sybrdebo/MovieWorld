import { BaseLayout } from '../layouts';
import styled from 'styled-components';

import {Hero} from '../components/hero';
import HighlightList from '../components/highlights/HighlightLists'

const heroImg = '/images/homeHero.png';
const title= 'MovieWorld';
const text = 'Discover a world of millions of movies and Tv shows. Find the movies that suit you and review those that you already watched.';

const dateOfToday = () => {
  const today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0');
  var yyyy = today.getFullYear(); 
  return `${yyyy}-${mm}-${dd}`
}

const home = [
  {
    title: "Popular movies",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_video=true&page=1`
  },
  {
    title: "Popular tv-shows",
    url: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US&sort_by=popularity.desc&page=1&include_null_first_air_dates=false`
  },
  {
    title: "Recent movies",
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US&sort_by=primary_release_date.desc&include_video=true&page=1&primary_release_date.lte=${dateOfToday()}`
  },
  {
    title: "Recent tv-shows",
    url: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US&sort_by=first_air_date.desc&first_air_date.lte=${dateOfToday()}&page=1&include_null_first_air_dates=false`
  },
  {
    title: "Trending movies",
    url: `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_MDB_API_KEY}`
  },
  {
    title: "Trending tv-shows",
    url: `https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.REACT_APP_MDB_API_KEY}`
  }
]

const Title = styled.h2`
  font-size: 1.5rem;
  padding:0 1rem;

  @media(min-width: 48rem) {
    font-size: 2rem;
    padding: 0 2rem;
  }
`;


const Container = styled.div`
  position: relative;
  margin: 0 1rem 4rem 0;

  @media(min-width: 48rem){
    margin: 0 2rem 5rem 1rem;
  }`;

const Wrapper = styled.div`
  overflow-x: auto;
  margin-left: 1rem;
              
  &::-webkit-scrollbar {
      background-color: transparent;
      height: 0.75rem;
  }

  &::-webkit-scrollbar-thumb {
      background-color: #e52626;
      border-radius: 1rem;
  }
`;
const HomePage = () => {
  return (
    <BaseLayout>
    <Hero img={heroImg} title={title} text={text} />
    {home.map(section => {
      return (
        <section>
            <Title>{section.title}</Title>
            <Container>
              <Wrapper>
                <HighlightList api={section.url}/>
              </Wrapper>
            </Container>
        </section> 
      )
    })}
    </BaseLayout>
  );
};

export default HomePage;