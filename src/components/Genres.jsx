import React from 'react'
import Genre from './Genre';

function Genres() {
  const genres = ['Horror', 'Action', 'Drama'];
  return <div>{genres.map(genre => <Genre genre={genre} />)}</div>;
}

export default Genres