import styled from 'styled-components'
import PrimaryButton from '../buttons/PrimaryButton';
import { Circle } from '../Rating';
import GenreItem from '../detail/GenreItem';


const GENRES = [
  {
  "id": 10759,
  "name": "action"
  },
  {
  "id": 16,
  "name": "animation"
  },
  {
  "id": 35,
  "name": "comedy"
  },
  {
  "id": 80,
  "name": "crime"
  },
  {
  "id": 99,
  "name": "documentary"
  },
  {
  "id": 18,
  "name": "drama"
  },
  {
  "id": 10751,
  "name": "family"
  },
  {
  "id": 10762,
  "name": "kids"
  },
  {
  "id": 9648,
  "name": "mystery"
  },
  {
  "id": 10763,
  "name": "news"
  },
  {
  "id": 10764,
  "name": "reality"
  },
  {
  "id": 10765,
  "name": "sciencefiction"
  },
  {
  "id": 10766,
  "name": "soap"
  },
  {
  "id": 10767,
  "name": "talk"
  },
  {
  "id": 10768,
  "name": "politics"
  },
  {
  "id": 37,
  "name": "western"
  }
  ]


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

const TvDescription = ({tv}) => {
  
  return (
    <DescriptionStyle>
      <DescriptionIntro>
        <img src={`http://image.tmdb.org/t/p/original${tv.poster_path}`} alt={tv.name} />
        <div>
          <h2>Description</h2>
          <p>{tv.overview}</p>
        </div>
      </DescriptionIntro>
      
      <div>
        <DescriptionList>
          <DescriptionItem>
            <span>Rating</span>
            <Circle rating={tv.vote_average} d={4}/>
          </DescriptionItem>
          <DescriptionItem>
            <span>Genre</span>
            <ul>{tv.genres.map(genre => {
              return (
                <GenreItem key={genre.id} text={GENRES.find(g => g.id === genre.id).name} />
              )
            })}</ul>  
          </DescriptionItem> 
          <DescriptionItem>
            <span>First air date</span>
            <span>{tv.first_air_date}</span>  
          </DescriptionItem> 
          <DescriptionItem>
            <span>Original language</span>
            <span>{tv.original_language}</span>  
          </DescriptionItem>  
        </DescriptionList>
        <PrimaryButton width={'100%'} content={'Add to watchlist'} />
      </div>
  </DescriptionStyle>
  )
}

export default TvDescription
