import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link } from 'react-router-dom';
import MovieCard from "../../Pages/MovieCard/MovieCard";
import MoviePage from "../../Pages/MoviePage/MoviePage";

export default function SearchMovie() {
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const containerRef = useRef();

  const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=e16df58156bf293703a8d26f42e8ca91';
  const API_SEARCH = 'https://api.themoviedb.org/3/search/movie?api_key=e16df58156bf293703a8d26f42e8ca91&query=';

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(API_SEARCH + term)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }
  

  const fetchMoreMovies = () => {
    if (!loading) {
      setLoading(true);
      fetch(`${API_URL}&page=${page + 1}`)
        .then(res => res.json())
        .then(data => {
          setMovies(prevMovies => [...prevMovies, ...data.results]);
          setPage(prevPage => prevPage + 1);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }, []);

  const handleMoreClick = () => {
    fetchMoreMovies();
  }

  return (
    <div className="search_div">
      <img className="img_John" src="img/John.webp" alt="John" />
      <form onSubmit={handleSearch}>
        <img  src="img/loup.png" alt="search-icon" style={{ width: '32px', height: '32px', position: 'relative', left: '210px', top: '1px' }} />
        <input onChange={(e) => setTerm(e.target.value)} />
        <button className="search_btn">Search</button>
        <p className="john_p"><strong>People don't change.</strong> You know that. Times, they do.</p>
      </form>
      <h1 className="popular_h1"> Popular Movies</h1>
      <div className="movies" ref={containerRef}>
        {movies.map((movie, index) =>
          <Link key={index} to={`/MoviePage/${movie.id}`}>
            <MovieCard {...movie} />
          </Link>
        )}
      </div>
      {loading && <p>Loading...</p>}
      <button className="More_btn" onClick={handleMoreClick} disabled={loading}>More</button>
      
    </div>
  )
}