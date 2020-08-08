import React, { useState, useEffect } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import axios from 'axios';



const newUser =({
    setModoregistro,
    titulo
}
) => {

    const onSubmit = data => {
        axios
        .post("http://localhost:5000/api/usuario", data)
        .then(
          (response) => {
             console.log(response.data);
          }
         
        )
        .catch((error) => {
          console.log(error);
        });
    
    
      }

      

return (
    <div>
        <h1>{titulo}</h1>
        <form onSubmit={onSubmit}>
        <label>Ingrese su nombre:</label><br></br>
       <input type="text" placeholder="Nombre" name="nombre" /><br></br>
       <label>Ingrese su mail:</label><br></br>
       <input type="text" placeholder="Mail" name="mail" /><br></br>
       <label>Ingrese su contraseña:</label><br></br>
       <input type="text" placeholder="Contraseña" name="pass" /><br></br>
        
      <input type="submit" />
    </form>
        <button onClick={() => setModoregistro(false)}>
        Cerrar
      </button>
    </div>


 
)


}

export default newUser;