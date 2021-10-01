import styled from 'styled-components';
import ReactPaginate from "react-paginate";
import { useState } from 'react';
import Card from '../card/Card';
import Error from '../loading/Error';
import Loading from '../loading/Loading';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router';

const ResultListStyle = styled.ul`
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

const ResultList = ({ sort, filter }) => {
  const [pageNumber, setPageNumber] = useState(1);
  const { query } = useParams();
  const API_URL = `
  https://api.themoviedb.org/3/search/multi?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US&query=${query}&page=${pageNumber}`;
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
                  <ResultListStyle>
                    {data.results.map(result => {
                      if(result.media_type !== 'person') {
                        return (
                          <Card key={result.id}  movie={result} />
                        )
                      }
                      return false;
                    })}
                  </ResultListStyle>
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

export default ResultList;