import React from 'react';
import swal from '@sweetalert/with-react';
import {useNavigate,Navigate} from 'react-router-dom';
function Login() {
    const navigate=useNavigate();

    const submitHandler=e=>{
        e.preventDefault();

        const email=e.target.email.value.trim();
        const password=e.target.password.value;
        const regex=  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email===''||password===''){
            swal(
                <h2>Los campos no pueden estar vacios</h2>
            )
            return
        }

        if(email!=='' && !regex.test(email)){
            swal(
                <h2>Debes escribir una direccion válida</h2>
            )
            return
        }
        sessionStorage.setItem('nombre',email)
        navigate('/')
        window.location.reload();

    }

    let nombre=sessionStorage.getItem('nombre');

  return (
    <div style={{height:'90vh'}}>
    { nombre && <Navigate to='/listado'/>}
    <h2>Formulario de login</h2>
    <form onSubmit={submitHandler}>
        <label htmlFor="email">
            <span>Correo Electrónico</span><br/>
            <input type="text" name="email" />
        </label>
        <br/>
        <label htmlFor="password">
            <span>Contraseña</span><br/>
            <input type="password" name='password'/>
        </label>
        <br/>
        <button type='submit' >Ingresar</button>
    </form>
    </div>
  )
}

export default Login