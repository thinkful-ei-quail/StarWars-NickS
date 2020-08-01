import React from 'react';

export default function Results({ person }) {
  return (
    <div className='results'>
      <div>NAME: {person.name}</div>
      <div>HEIGHT: {person.height}</div>
    </div>
  );
}
