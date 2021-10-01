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
      nr = 28;
      break;
    case 'animation':
      nr = 16;
      break;
    case 'adventure':
      nr = 12;
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
    case 'fantasy':
      nr = 14;
      break;
    case 'history':
      nr = 36;
      break;
    case 'horror':
      nr = 27;
      break;
    case 'music':
      nr = 10402;
      break;
    case 'mystery':
      nr = 9648;
      break;
    case 'romance':
      nr = 10749;
      break;
    case 'sciencefiction':
      nr = 878;
      break;
    case 'thriller':
      nr = 53;
      break;
    case 'war':
      nr = 10752;
      break;
    case 'western':
      nr = 37;
      break;
    default: 
      nr = ''; 
  }
  return nr;
}

const MoviesList = ({ sort, filter }) => {
  const [pageNumber, setPageNumber] = useState(1);

  let API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US&sort_by=${sort}&include_video=true&page=${pageNumber}`;
  if (filter) {
    const genres = Object.keys(filter)
    .filter((k) => {return (filter[k] === true)});
    const genreNumbers = genres.map(genre => {
      const genreNumber = getGenreNumber(genre);
      return genreNumber;
    })
    API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US&sort_by=${sort}&include_video=true&primary_release_date.gte=${filter.releaseYear[0]}-01-01&primary_release_date.lte=${filter.releaseYear[1]}-12-31&vote_average.gte=${filter.userScore[0] / 10}&vote_average.lte=${filter.userScore[1] / 10}&with_genres=${genreNumbers.join('%2c')}&page=${pageNumber}`;
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
                    {data.results.map(movie => {
                      return (
                        <Card key={movie.id}  movie={movie} />
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

export default MoviesList;