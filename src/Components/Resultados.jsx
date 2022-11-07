import axios from 'axios';
import {useEffect,useState} from 'react'
import swal from '@sweetalert/with-react';
import Card from './Card';

function Resultados(props) {
    let query= new URLSearchParams(window.location.search);
    let keyword=query.get('keyword')

    const [movies,setMovies]=useState([]);


    useEffect(()=>{
        const endpoint=`https://api.themoviedb.org/3/search/movie?api_key=373d3d64f286e9fc62879bb68579a452&language=es-ES&page=1&include_adult=false&query=${keyword}`

        axios.get(endpoint).then(response=>{
            const movieData=response.data.results;


            if(movieData.length===0){
                swal(
                    <h2>Tu busqueda no arrojo resultados</h2>
                  )
            }
            setMovies(movieData);
            
            

        }).catch((err)=>{
            swal(
                <h2>Ocurrio un error</h2>
              )
        })
    },[keyword])


    
  return (
    <>
        <h3>Se muestran resultados de: <em>{keyword}</em></h3>
        {movies.length===0 && <h5>No hay resultados</h5>}
        <Card moviesList={movies} addOrRemoveFavs={props.addOrRemoveFavs}/>
    </>
  )
}

export default Resultados