
import "./App.css";
import {Routes, Route, Link } from 'react-router-dom';
import SearchMovie from "./component/SearchMovie/SearchMovie";
import MoviePage from "./Pages/MoviePage/MoviePage";

export default function App() {

  return (
    <div className="App">
      <div className="search_nav">
        <div className="header">
         <Link to="/SearchMovie"><img src="img/movie.jpg"></img></Link>
        
        </div>
        
      </div>

      <Routes>
            <Route path="/SearchMovie" element={<SearchMovie/>}></Route>
           
            <Route path="/MoviePage/:id" element={<MoviePage />} />
     
      </Routes>
    </div>
  
  );
}
