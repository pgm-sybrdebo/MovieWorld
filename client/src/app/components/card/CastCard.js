import styled from 'styled-components';
import { useState } from 'react';

const CastCardStyle = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 12rem;
  margin-right: 1.5rem;

  img {
    display: block;
    margin: 0 auto 0.5rem auto;
    height: 10rem;
    width: 10rem;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
  }

  span {
    margin-bottom: 0.5rem;
    font-weight: bold;

    &:last-child {
      font-weight: initial;
    }
  }
`;

const CastCard = ({person}) => {
  const src = `http://image.tmdb.org/t/p/w500${person.profile_path}`;
  const fallback = '/images/fallback.png';
  const [isError, setIsError] = useState(false);

  const onImageError = () => {
    setIsError(true);
  }
  
  return (
    <CastCardStyle>
      <img src={!isError ? src : fallback} onError={onImageError} alt={person.name} />
      <span>{person.name}</span>
      <span>{person.character}</span>
    </CastCardStyle>
  )
}

export default CastCard
