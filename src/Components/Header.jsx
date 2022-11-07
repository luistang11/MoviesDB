import React from 'react'
import {Link} from 'react-router-dom'
import Buscador from './Buscador'

function Header() {
  let nombre=sessionStorage.getItem('nombre');

  return (
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link class="navbar-brand" to='/'>Peliculas</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>

          {nombre && 
          <>
            <li class="nav-item">
              <Link class="nav-link" to='/listado'>Listado</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to='/favoritos'>Favoritos</Link>
            </li>
          </>
            
          }

      </ul>
    </div>
    {nombre && <Buscador/>}
  </div>
</nav>
  )
}
export default Header