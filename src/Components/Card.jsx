import React from 'react'
import {Link} from 'react-router-dom';
function Card({moviesList,addOrRemoveFavs}) {
  return (
    <div>
        <div className="row">
          {moviesList.map((item,key)=>(
            
              <div className='col-3' key={key}>
                <div className="card" >
                  <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} className="card-img-top" alt={item.original_title}/>
                  <button className='favourite-btn' 
                  onClick={addOrRemoveFavs}
                  data-movie-id={item.id}
                  >🖤</button>
                  <div className="card-body">
                    <h5 className="card-title">{item.original_title}</h5>
                    <p className="card-text">{item.overview.substring(0,100)}...</p>
                    <Link to={`/detalle?movieID=${item.id}`}className="btn btn-primary">View Detail</Link>
                  </div>
                </div>
              </div>
          ))}
        </div>

    </div>
  )
}

export default Card