import React, { useEffect, useState } from 'react'
import {Navigate} from 'react-router-dom';
import axios from 'axios';
import swal from '@sweetalert/with-react';

function Detalle() {
    let nombre=sessionStorage.getItem('nombre');

    let query= new URLSearchParams(window.location.search);
    let idMovie=query.get('movieID')


    const [movie,setMovie]=useState(null);

    useEffect(()=>{

        const endPoint=`https://api.themoviedb.org/3/movie/${idMovie}?api_key=373d3d64f286e9fc62879bb68579a452&language=es-ES`
        axios.get(endPoint).then((res)=>{
            const movieData=res.data;
            setMovie(movieData)
            console.log(movieData)
        }).catch((err)=>{
            swal(
                <h2>Hubo errores, intenta mas tarde</h2>
            )
    })
    },[idMovie])




  return (
    <>
        { !nombre && <Navigate to='/'/>}
        {!movie && <p>Cargando...</p>}
        { movie && 
        <>
            <h2>{movie.title}</h2>
            <div className='row'>
                <div className='col-4'>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} className="img-fluid" alt={movie.original_title}/>
                </div>
                <div className='col-8'>
                    <h5>Fecha de estreno: {movie.release_date}</h5>
                    
                    <h5>Reseña:</h5>
                    <p>{movie.overview}</p>
                    <h5>Rating: {movie.vote_average}</h5>
                    <h5>Géneros:</h5>
                    <ul>
                        {movie.genres.map((genero)=>(
                            <li key={genero.id}>{genero.name}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </>
        }

    </>
  )
}

export default Detalle