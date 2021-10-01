import React from 'react'
import Description from './Description';
import Cast from '../detail/Cast';
import Trailer from '../detail/Trailer';
import Reviews from '../detail/Reviews';
import Discussions from '../detail/Discussions';

const MovieDetail = ({movie}) => {
  return (
    <div>
      <Description movie={movie} />
      <Cast id={movie.id}/>
      <Trailer id={movie.id}/>
      <Reviews id={movie.id}/>
      <Discussions id={movie.id} />
    </div>
  )
}

export default MovieDetail
