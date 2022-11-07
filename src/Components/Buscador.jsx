import React from 'react'
import swal from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';
function Buscador() {
    const navigate=useNavigate();

    const handlerSubmit=(e)=>{
        e.preventDefault()
        const keyword=e.target.text.value.trim();
        if(keyword.length===0){
            swal(
                <h2>Tienes que ingresar una palabra clave</h2>
            )
        }
        else if(keyword.length<4){
            swal(
                <h2>Tienes que ingresar mas de 4 caracteres</h2>
            )
        }
        else{
            e.target.text.value='';
            navigate(`/resultados?keyword=${keyword}`)
            window.location.reload();
        }
    }

  return (
    <>
        <form onSubmit={handlerSubmit}>
            <label htmlFor="text">
                <input type="text" name="text" placeholder='Buscar...'/>
            </label>
            <button type='submit' >Buscar</button>
        </form>
    </>
  )
}

export default Buscador