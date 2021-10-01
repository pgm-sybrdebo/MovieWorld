import styled from 'styled-components';
import useFetch from '../../hooks/useFetch';
import Error from '../loading/Error';
import Loading from '../loading/Loading';

const StyledTrailer = styled.section`
  padding: 0 1rem;
  h2 {
    padding-bottom: 1.5rem;
  }

  @media (min-width: 52rem) {
    padding: 0 2rem;
  }
`;

const TrailerContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-top: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`;


const Trailer = ({id, cat='movie'}) => {
  let API_URL = `https://api.themoviedb.org/3/${cat}/${id}/videos?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
  const [data, isLoading, error] = useFetch(API_URL);
  return (
    <StyledTrailer>
      <h2>Trailer</h2>
      {
        error ? <Error>{error}</Error> :
        isLoading || !data ?
            <Loading /> :
            <TrailerContainer>
              <iframe title="Trailer" src={`https://www.youtube.com/embed/${data.results[0].key}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </TrailerContainer>
        }
    </StyledTrailer>
  )
}

export default Trailer
