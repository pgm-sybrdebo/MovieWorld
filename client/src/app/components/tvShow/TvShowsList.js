import styled from 'styled-components';
import ReactPaginate from "react-paginate";
import { useState } from 'react';
import Card from '../card/Card';
import Error from '../loading/Error';
import Loading from '../loading/Loading';
import useFetch from '../../hooks/useFetch';

const MoviesListStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const StyledPaginateContainer = styled.div`
  .paginationBttns {
    list-style: none;
    margin: 1rem 0 3rem 0;
    display: flex;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .paginationBttns li {
    margin: 1.5rem 0;
  }

  .paginationBttns a {
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 3px;
    border: 1px solid ${props => props.theme.secondaryColor};
    color: ${props => props.theme.secondaryColor};
    cursor: pointer;

    @media (min-width: 62rem) {
      padding: 1rem; 
    }

  }

  .paginationBttns a:hover {
    background-color: #e52626;
    color: #dfe1ec;
  }

  .paginationActive a {
    background-color: #e52626;
  }

  .paginationDisabled a {
    color: transparent;
    background-color: transparent;

    &:hover {
      color: transparent;
      background-color: transparent;
    }
  }
`;


const getGenreNumber = (genre) => {
  let nr = '';
  switch (genre) {
    case 'action':
      nr = 10759;
      break;
    case 'animation':
      nr = 16;
      break;
    case 'comedy':
      nr = 35;
      break;
    case 'crime':
      nr = 80;
      break;
    case 'documentary':
      nr = 99;
      break;
    case 'drama':
      nr = 18;
      break;
    case 'family':
      nr = 10751;
      break;
    case 'kids':
      nr = 10762;
      break;
    case 'mystery':
      nr = 9648;
      break;
    case 'news':
      nr = 10763;
      break;
    case 'reality':
      nr = 10764;
      break;
    case 'sciencefiction':
      nr = 10765;
      break;
    case 'soap':
      nr = 10766;
      break;
    case 'talk':
      nr = 10767;
      break;
    case 'politics':
      nr = 10767;
      break;
    case 'western':
      nr = 37;
      break;  
    default: 
      nr = ''
  }
  return nr;
}


const TvShowsList = ({ sort, filter }) => {
  const [pageNumber, setPageNumber] = useState(1);
  let API_URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US&sort_by=${sort}&page=${pageNumber}`;
  if (filter) {
    const genres = Object.keys(filter)
    .filter((k) => {return (filter[k] === true)});
    const genreNumbers = genres.map(genre => {
      const genreNumber = getGenreNumber(genre);
      return genreNumber;
    })
 
    API_URL = `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US&sort_by=${sort}&include_video=true&first_air_date.gte=${filter.releaseYear[0]}-01-01&first_air_date.lte=${filter.releaseYear[1]}-12-31&vote_average.gte=${filter.userScore[0] / 10}&vote_average.lte=${filter.userScore[1] / 10}&with_genres=${genreNumbers.join('%2c')}&page=${pageNumber}`;
  } 

  const [data, isLoading, error] = useFetch(API_URL);

  const changePage = ({ selected }) => {
    setPageNumber(selected + 1);
  };

  return (
    <div>
      <div>
        {
            error ? <Error>{error}</Error> :
            isLoading || !data ?
                <Loading /> :
                <div>
                  <MoviesListStyle>
                    {data.results.map(tvShow => {
                      return (
                        <Card key={tvShow.id}  tvShow={tvShow} />
                      )
                    })}
                  </MoviesListStyle>
                  <StyledPaginateContainer>
                    <ReactPaginate 
                      previousLabel={"Back"}
                      nextLabel={"Next"}
                      pageCount={data.total_pages}
                      pageRangeDisplayed={0}
                      onPageChange={changePage}
                      containerClassName={"paginationBttns"}
                      previousLinkClassName={"previousBttn"}
                      nextLinkClassName={"nextBttn"}
                      disabledClassName={"paginationDisabled"}
                      activeClassName={"paginationActive"}
                    />
                  </StyledPaginateContainer>
                </div>  
        }
      </div>    
  </div>
  )
};

export default TvShowsList;