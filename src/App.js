import React,{ useEffect, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import MovieList from './components/MovieList';
import SearchBox from "./components/SearchBox"
import MovieListHeading from './components/MovieListHeading';
// 25"24
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState("");

  const getMovieRequest = async ()=>{
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=738bbe82`
    const response = await fetch(url);
    const responseJson = await response.json();

    // console.log(responseJson);
    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  },[searchValue])
  return(
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center'>
        <MovieListHeading heading="Movies" />
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="row">
        <MovieList movies={movies} />
      </div>
    </div>
    ) 
  }

export default App;