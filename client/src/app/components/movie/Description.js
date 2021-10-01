import styled from 'styled-components'
import PrimaryButton from '../buttons/PrimaryButton';
import { Circle } from '../Rating';
import GenreItem from '../detail/GenreItem';


const DescriptionStyle = styled.div`
  padding: 0 1rem;

  img {
    width: 100%;
    display: block;
    border-radius: 3px;
    max-width: 24rem;
    margin: 0 auto;
  }

  h2 {
    padding: 1.5rem 0;
  }

  ul {
    list-style: none;
    margin-top: 1.5rem;
  }

  @media (min-width: 52rem) {
    padding: 0 2rem;

    img {
      width: 14rem;
      margin-right: 1.5rem;
    }

    h2 {
      padding-top: 0;
    }

    button {
      max-width: 16rem;
      display: block;
      margin: 0 auto;
    }
  }
`;

const DescriptionIntro = styled.div`
  @media (min-width: 52rem) {
    display: flex;
  }
`;

const DescriptionList = styled.ul`
  margin-bottom: 1.5rem;
  @media (min-width: 52rem) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const DescriptionItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  span {
    width: 45%;
    font-size: 1.2rem;

    &:first-child {
      margin-left: 0;
      font-size: 1rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    width: 45%;

      li {
        margin-right: 1rem;
      }
  }

  @media (min-width: 52rem) {
    width: 48%;
    
  }
`;

const Description = ({movie}) => {
  const time = (min) => {
    const h = Math.floor(min / 60);
    const m = min % 60;
    return `${h}h ${m}m`
  }
  
  return (
    <DescriptionStyle>
      <DescriptionIntro>
        <img src={`http://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
        <div>
          <h2>Description</h2>
          <p>{movie.overview}</p>
        </div>
      </DescriptionIntro>
      
      <div>
        <DescriptionList>
          <DescriptionItem>
            <span>Rating</span>
            <Circle rating={movie.vote_average} d={4}/>
          </DescriptionItem>
          <DescriptionItem>
            <span>Genre</span>
            <ul>{movie.genres.map(genre => {
              return (
                <GenreItem key={genre.id} text={genre.name} />
              )
            })}</ul>  
          </DescriptionItem> 
          <DescriptionItem>
            <span>Release Date</span>
            <span>{movie.release_date}</span>  
          </DescriptionItem> 
          <DescriptionItem>
            <span>Runtime</span>
            <span>{time(movie.runtime)}</span>  
          </DescriptionItem> 
          <DescriptionItem>
            <span>Original language</span>
            <span>{movie.original_language}</span>  
          </DescriptionItem> 
          <DescriptionItem>
            <span>Budget</span>
            <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(movie.budget)}</span>  
          </DescriptionItem> 
          <DescriptionItem>
            <span>Revenue</span>
            <span>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', currencyDisplay: 'narrowSymbol'}).format(movie.revenue)}</span>  
          </DescriptionItem> 
        </DescriptionList>
        <PrimaryButton width={'100%'} content={'Add to watchlist'} />
      </div>
  </DescriptionStyle>
  )
}

export default Description
