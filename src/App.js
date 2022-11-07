import './App.css';
import './bootstrap.min.css'
import Login from './Components/Login';
import Listado from './Components/Listado';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer';
import Detalle from './Components/Detalle';
import Resultados from './Components/Resultados';
import Favoritoss from './Components/Favoritoss';
function App() {
  

  function addOrRemoveFavs(e){
    const favMovies=localStorage.getItem('favs')

    let tempMoviesInFavs;

    if(favMovies===null){
      tempMoviesInFavs=[]
    }
    else{
      tempMoviesInFavs=JSON.parse(favMovies)
    }
    const btn=e.target;
    const parent=btn.parentElement;
    const backdrop_path=parent.querySelector('img').getAttribute('src');
    const original_title=parent.querySelector('h5').innerText;
    const overview=parent.querySelector('p').innerText;
    const movieData={
      backdrop_path,
      original_title,
      overview,
      id:btn.dataset.movieId
    }
    let movieIsInArray= tempMoviesInFavs.find(oneMovie=>{
      return oneMovie.id=== movieData.id
    })
    if(!movieIsInArray){
      tempMoviesInFavs.push(movieData);
      localStorage.setItem('favs', JSON.stringify(tempMoviesInFavs));
      console.log('se agrego la pelicula')
    }
    else{
      let moviesLeft=tempMoviesInFavs.filter(movie=>{
        return movie.id !== movieData.id;
      })
      localStorage.setItem('favs', JSON.stringify(moviesLeft));
      console.log('se elimino la pelicula')
    }
    
    
  }


  return (
    
    <BrowserRouter>
      <Header/>
      <div className='container' style={{height:'100%'}}>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/listado" element={<Listado addOrRemoveFavs={addOrRemoveFavs}/>}></Route>
        <Route path='*' element={<h1>404</h1>}></Route>
        <Route path="/detalle" element={<Detalle/>}></Route>
        <Route path="/resultados" element={<Resultados addOrRemoveFavs={addOrRemoveFavs}/>}></Route>
        <Route path="/favoritos" element={<Favoritoss addOrRemoveFavs={addOrRemoveFavs}/>}></Route>
      </Routes>
      </div>
      <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
