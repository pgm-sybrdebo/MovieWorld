import styled from 'styled-components';
import Error from '../loading/Error';
import Loading from '../loading/Loading';
import CastCard from '../card/CastCard';
import useFetch from '../../hooks/useFetch';


const CastSection = styled.section`
  padding-top: 3rem;

  h2 {
    padding: 0 1.5rem 1rem 1rem;

    @media (min-width: 52rem) {
      padding: 0 2rem 1rem 2rem;
    }
  }
`;

const Container = styled.div`
  position: relative;
  margin: 0 1rem 4rem 0;

  @media(min-width: 52rem){
    margin: 0 2rem 4rem 1rem;
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

const CastList = styled.ul`
  list-style: none;
  display: flex;
`;


const Cast = ({id, cat='movie'}) => {
  let API_URL = `https://api.themoviedb.org/3/${cat}/${id}/credits?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
  const [data, isLoading, error] = useFetch(API_URL);

  return (
    <CastSection>
      <h2>Cast</h2>
      {
        error ? <Error>{error}</Error> :
        isLoading || !data ?
            <Loading /> :
            <Container>
              <Wrapper>
                <CastList>
                  {data.cast.map(castMember => {
                    return (
                      <CastCard key={castMember.id} person={castMember}/>
                    )
                  })}
                </CastList>
              </Wrapper>
            </Container>  
        }
    </CastSection>
  )
}

export default Cast
