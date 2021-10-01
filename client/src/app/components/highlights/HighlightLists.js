import useFetch from '../../hooks/useFetch';
import styled from 'styled-components';
import Error from '../loading/Error';
import Loading from '../loading/Loading';
import Card from '../card/Card';


const CardList = styled.ul`
  display: flex;
  list-style: none;
`;

const HighlightLists = ({api}) => {
  const [data, isLoading, error] = useFetch(api);
  
  return (
    <div>
      {
        error ? <Error>{error}</Error> :
        isLoading || !data ?
            <Loading /> :
            <CardList>
              {data.results.map(movie => {
                return (
                  <Card key={movie.id}  movie={movie} category={'home'}/>
                )
              })}
            </CardList>
      }
  </div>
  )
}

export default HighlightLists
