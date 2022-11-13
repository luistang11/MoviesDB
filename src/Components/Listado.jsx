import {useNavigate,Navigate} from 'react-router-dom';
import swal from '@sweetalert/with-react';
import {useEffect,useState} from 'react'
import axios from 'axios';
import Card from './Card';
function Listado(props) {
  const navigate=useNavigate();
  let nombre=sessionStorage.getItem('nombre');

  const [moviesList,setMoviesList]=useState([]);

  useEffect(()=>{
    const endpoint='https://api.themoviedb.org/3/discover/movie?api_key=373d3d64f286e9fc62879bb68579a452&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
    axios.get(endpoint)
    .then(res=>{
      const apiData=res.data;
      setMoviesList(apiData.results)
    }).catch((err)=>{
      swal(
        <h2>Hubo errores, intenta mas tarde</h2>
      )
    })
  },[setMoviesList])

  function handleCloseSesion(){
    sessionStorage.clear()
    swal(
      <h2>Ha cerrado sesion</h2>
    )
    navigate('/')
    window.location.reload();
    
  }

  return (
    
    <>
        { !nombre && <Navigate to='/'/>}
        <button onClick={()=>handleCloseSesion()} type="button" className="btn btn-danger">Cerrar Sesion</button>
        <Card moviesList={moviesList} addOrRemoveFavs={props.addOrRemoveFavs}/>
        
    </>
  )
}

export default Listado