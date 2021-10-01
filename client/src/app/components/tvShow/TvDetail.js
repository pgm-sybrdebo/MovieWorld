import React from 'react'
import TvDescription from './TvDescription';
import Cast from '../detail/Cast';
import Trailer from '../detail/Trailer';
import Reviews from '../detail/Reviews';
import Discussions from '../detail/Discussions';

const TvDetail = ({tv}) => {
  return (
    <div>
      <TvDescription tv={tv} />
      <Cast id={tv.id} cat={'tv'}/>
      <Trailer id={tv.id} cat={'tv'}/>
      <Reviews id={tv.id} cat={'tv-shows'}/>
      <Discussions id={tv.id} cat={'tv-shows'} />
    </div>
  )
}

export default TvDetail
