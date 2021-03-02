import React, { useEffect, useState } from 'react';
import axios from './axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './row.css';

function Row({title, fetchURL, isLargeRow = false}){
    const [movies, setMovies] = useState([]);
    const playIcon = <FontAwesomeIcon icon={['fas', 'f7a5']} />
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])
    console.log(movies);

    return (
        <div className="row">
            <h2>{playIcon}{title}</h2>
            <div className="row-posters">
                  {movies.map(
                      (movie) =>
                      ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) 
                      && (
                        <img
                        className={`row-poster ${isLargeRow && "row-posterLarge"}`}
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                       />
                      )
                    )}
            </div>            
        </div>
    )
}

export default Row;