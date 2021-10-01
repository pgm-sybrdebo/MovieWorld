import styled from 'styled-components';
import { useState } from 'react';
import { BaseLayout } from '../layouts';
import {Hero} from '../components/hero';
import {MoviesList} from '../components/movie/index';
import { Filter } from '../components/filter';
import { Sort } from '../components/sort';
const heroImg = '/images/moviesHero.png';
const title= 'Movies';

const Movies = styled.div`
  @media(min-width: 52rem) {
    display: flex;
    width: 100%;
    margin: 0 auto;
  }
`;

const SortAndMovies = styled.div`
  @media(min-width: 52rem) {
    width: 70%;
  }

`;

const MoviesPage = () => {
  const [sortOrder, setSortOrder] = useState("popularity.desc")
  const [fil, setFil] = useState()
  const handleSortChange = (isSelected) => {
    setSortOrder(isSelected);
  }
  const handleFilChange = (isSelected) => {
    setFil(isSelected);
  }
  return (
    <BaseLayout>
      <Hero img={heroImg} title={title}/>
      <Movies>
        <Filter onFilChange = {handleFilChange}/>
        <SortAndMovies>
          <Sort onSortChange ={handleSortChange}/>
          <MoviesList sort={sortOrder} filter={fil}/>
        </SortAndMovies>
      </Movies>
    </BaseLayout>
  );
};

export default MoviesPage;