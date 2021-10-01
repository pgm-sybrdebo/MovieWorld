import { useParams } from 'react-router';
import { BaseLayout } from '../layouts';
import useFetch from '../hooks/useFetch';
import { Hero } from '../components/hero';
import Error from '../components/loading/Error';
import Loading from '../components/loading/Loading';
import {TvDetail} from '../components/tvShow';

const splitter = (string, divider, begin, end) => {
  const tokens = string.split(divider).slice(begin, end);
  const result = tokens.join(divider);
  return result
};
const TvShowPage = () => {
  const { id } = useParams();
  let API_URL = `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.REACT_APP_MDB_API_KEY}&language=en-US`;
  const [data, isLoading, error] = useFetch(API_URL);
  return (
    <BaseLayout>
      {
        error ? <Error>{error}</Error> :
        isLoading || !data ?
            <Loading /> :
            <>
              <Hero img={`http://image.tmdb.org/t/p/original${data.backdrop_path}`} title={`${data.name} (${splitter(data.first_air_date,'-', 0, 1)})`} position={'center'}/> 
              <TvDetail tv={data}/>
            </>
        }
    </BaseLayout>
  );
};

export default TvShowPage;