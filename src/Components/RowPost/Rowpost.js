import React, { useEffect, useState } from 'react'
import "./Rowpost.css"
import axios from '../../axios'
import {imageURL } from '../../Constants/constants'
import movieTrailer from 'movie-trailer'

function Rowpost(props) {

        const [movies, setMovies] = useState([]);
        const [trailerPath, setTrailerPath] = useState('');

        useEffect(() => {
                axios.get(props.url).then(response => {
                       const results=response.data.results;
                        console.log(results)
                        setMovies(results)

                }).catch(err =>{
                        alert('Network error')
                })
        }, [])
        const handleMovie = (movie) =>{
                console.log(movie)
                if (trailerPath === '') {
                        movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title).then((response) => {
                            const path = response.split('?v=')[1];
                            const url = `https://www.youtube.com/watch?v=${path}`;
                            window.open(url, '_blank');
                        }).catch((error) => {
                                alert('Trailer Unavailable')
                        })
                    } else {
                        setTrailerPath('');
                    }

        }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>

                {movies.map((obj) => 
                        <img onClick={()=>handleMovie(obj)} className={props.isSmall ? 'smallPoster' : 'poster'} src={`${imageURL+obj.backdrop_path}`} alt="poster" />        
                )}
                
        </div>
    </div>
  )
}

export default Rowpost
