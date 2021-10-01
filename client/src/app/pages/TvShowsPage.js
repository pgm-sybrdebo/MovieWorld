import styled from 'styled-components';
import { useState } from 'react';
import { BaseLayout } from '../layouts';
import {Hero} from '../components/hero';
import {TvShowsList} from '../components/tvShow';
import { Filter } from '../components/filter';
import { Sort } from '../components/sort';
const heroImg = '/images/tvShowsHero.png';
const title= 'TvShows';

const TvShows = styled.div`
  @media(min-width: 52rem) {
    display: flex;
    width: 100%;
    margin: 0 auto;
  }
`;

const SortAndTvShows = styled.div`
  @media(min-width: 52rem) {
    width: 70%;
  }
`;


const TvShowsPage = () => {
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
      <TvShows>
        <Filter onFilChange = {handleFilChange} cat={"tv"}/>
        <SortAndTvShows>
          <Sort onSortChange ={handleSortChange}/>
          <TvShowsList sort={sortOrder} filter={fil}/>
        </SortAndTvShows>
      </TvShows>
    </BaseLayout>
  );
};

export default TvShowsPage;