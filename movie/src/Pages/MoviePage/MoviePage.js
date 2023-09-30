import {Routes, Route, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './MoviePage.css'
import App from '../../App';

const MoviePage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const API_KEY = 'e16df58156bf293703a8d26f42e8ca91';
    const MOVIE_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`;

    fetch(MOVIE_URL)
      .then(res => res.json())
      .then(data => {
        setMovieDetails(data);
        console.log(data);
      });
  }, [id]);

  if (!movieDetails) {
    return <p>Loading...</p>;
  }

  const { title, vote_average, credits, poster_path, budget, overview, runtime } = movieDetails;

  return (
    <div className="movie_poster_block">
      
      <div className='movie_block'>
        <Link className='link_Movie' to="/SearchMovie">Home</Link>
       <h1 className='movie_h1'>{title}</h1>
        <p className='Avg_rating'>Average Rating: {vote_average}</p>
        <p className='budget'>budget: {budget}</p>
        <p className='overview'>{overview}</p>
        <p className='runtime'>Running time: {runtime} minutes</p>
        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      </div>

      <h2>Actors:</h2>
      <div className="actors-container">
        {credits.cast.map((actor, index) => (
          <div key={index} className="actor-card">
            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} />
            <p>{actor.name}</p>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;