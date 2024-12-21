import React from 'react';
import ReactDOM from 'react-dom/client';
import StarRating from './StarRating';
import {useState} from 'react'
import './index.css';
import App from './App';

function Test()
{
  const [movieRating, setMovieRating] = useState(0)

  return (
    <div>
      <StarRating color='blue' maxRating={10} onStarRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={["terrible", "bad", "okay", "good", "amazing"]} />
    <StarRating size={24} defauleRating={3} /> */}
    {/* <Test /> */}
  </React.StrictMode>
);
