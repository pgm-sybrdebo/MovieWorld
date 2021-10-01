import * as Routes from '../../routes';

import styled from 'styled-components';
import {useState} from 'react';
import { Link } from 'react-router-dom';


const CardStyle = styled.li`
  position: relative;
  display: block;
  width: 14rem;
  min-width: 14rem;
  flex-grow: 1;
  margin: 2rem 2rem 4rem 1rem;
  border-radius: 1rem;
  box-shadow:${props => props.theme.primaryShadow} 0px 10px 36px 0px, ${props => props.theme.secondaryShadow} 0px 0px 0px 1px;
  background-color: #191a32;


  &:first-child {
    margin-left: ${props => props.cat === 'home' ? '0' : '1rem'}
  }
`;

const CardImg = styled.div`
  position: relative;
  
  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem 1rem 0 0;
  }

`;

const WatchList = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5rem;
  border-radius: 3px 1rem 3px 3px;
  background-color: rgba(0,0,0,0.4);

`;

const CardLink = styled.div`
  a {
    text-decoration: none;

    span {
      display: inline-block;
      margin: 1rem 1rem 2rem 1rem;
      position: relative;
      font-size: 1.2rem;
      line-height: 1.5;
      font-weight: bold;
      color: #dfe1ec;
      transition: all 0.2s ease-in-out;
  
  
      &::before {
        content: '';
        position: absolute;
        left: 0;
        width: 0;
        bottom: -0.2rem;
        background: #e52626;
        height: 0.2rem;
        transition: all 0.2s ease-in-out;
      }
    }


    &:hover  span {
      color: #e52626;
      
      &::before {
        width: 100%;
      }
    }
  }
`;

const Circle = styled.svg`
  position: absolute;
  bottom: -3rem;
  right: -1rem;
  display: block;
  margin: 1rem auto;
  max-width: 4rem;
  max-height: 4rem;

  path {
    fill: #191a32;
    strokeLinecap: round;
    stroke-width: 0.2rem;
  }

  text {
    fill: #dfe1ec;
    font-family: sans-serif;
    font-size: 0.5em;
    text-anchor: middle;
  }
`;



const Card = ({ movie, tvShow, category='' }) => {
  const src = `http://image.tmdb.org/t/p/w500${movie ? movie.poster_path : tvShow.poster_path}`;
  const fallback = '/images/fallback.png'
  const [isError, setIsError] = useState(false)

  const onImageError = () => {
    setIsError(true);
  }

  const percentage = parseInt(movie ? movie.vote_average : tvShow.vote_average) * 10;
  return (
    <CardStyle cat={category}>
      <CardLink>
        <Link to={movie? Routes.MOVIES_DETAILS.replace(':id', movie.id): Routes.TV_SHOWS_DETAILS.replace(':id', tvShow.id)}>
          <CardImg>
            <img src={!isError ? src : fallback} onError={onImageError} alt={movie ? movie.original_title ? movie.original_title : movie.original_name : tvShow.name}></img>  
          </CardImg>
          <span>{movie ? movie.original_title ? movie.original_title : movie.name : tvShow.name}</span>
        </Link>
      </CardLink>
      <WatchList>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="27.64"><g data-name="Group 20"><path data-name="Icon metro-eye" d="M15.424 0A17.276 17.276 0 000 9.64a17.159 17.159 0 0030.849 0A17.276 17.276 0 0015.425 0zm7.605 5.113a14.668 14.668 0 014.5 4.528 14.668 14.668 0 01-4.5 4.528 14.135 14.135 0 01-15.21 0 14.668 14.668 0 01-4.5-4.528 14.668 14.668 0 014.5-4.528c.118-.075.237-.148.357-.22a7.712 7.712 0 1014.5 0q.18.107.357.22zm-7.605 1.635a2.892 2.892 0 11-2.895-2.892 2.892 2.892 0 012.895 2.892z" fill="#dfe1ec"/><g data-name="Icon feather-plus-circle" fill="none" stroke="#dfe1ec" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path data-name="Path 9" d="M39 18.64a8 8 0 11-8-8 8 8 0 018 8z"/><path data-name="Path 10" d="M31 15.44v6.4"/><path data-name="Path 11" d="M27.8 18.64h6.4"/></g></g></svg>
      </WatchList>
      <Circle viewBox="0 0 36 36">
        <path
          stroke="#dfe1ec" 
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <path stroke="#89fd17"
          strokeDasharray={`${percentage}, 100`}
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
        />
        <text x="18" y="20.35">{percentage}%</text>
      </Circle>
    </CardStyle>
  )
};

export default Card;