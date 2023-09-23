import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import  FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

function FormSignUp (props) {
  const {manejarEnvio} = props
  const [nombre, setNombre] = useState("")
  // useEffect(() => {
  //   console.log("Nombre agregado", nombre)
  // }, [nombre])

    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)
    const [error, setError] = useState({
      nombre: {
        error : false,
        message: "Deben ser al menos 3 letras"
      },
    
    })

    function validarNombre(Nombre){
      if(Nombre.length >= 3){
        return {nombre: {error: false, message : ""} }
      }else{
        return {nombre: {error: true, message : "Deben ser al menos 3 letras"} }
      }
    }

      return <form onSubmit={(e) => {
        e.preventDefault()
          manejarEnvio({
            nombre, apellido, email, prom, nov,
          })
      }}>
      <TextField id='Nombre'
                 label="Nombre" 
                 variant='outlined' 
                 fullWidth
                 margin='normal' 
                 onChange={(e) => {
                  setNombre(e.target.value)
                }}
                value={nombre}
                error={error.nombre.error}
                helperText={error.nombre.error ? error.nombre.message : ""}
                onBlur={(e) => {
                 setError(validarNombre(e.target.value)
                )}}

                 />

      <TextField id="Apellido" 
                 label="Apellido" 
                 variant='outlined'
                 fullWidth
                 margin='normal'
                 value={apellido}
                 onChange={(e) => {
                  setApellido(e.target.value)
                }}
                 />

      <TextField id='Correo'
                 label="Correo" 
                 variant='outlined'
                 fullWidth
                 margin='normal'
                 value={email}
                 onChange={(e) => {
                  setEmail(e.target.value)
                }}
                 />

    <FormGroup >
      <FormControlLabel control={ <Switch checked = {prom}
         onChange={(e) => {
          setProm(e.target.checked)
        }} 
      />
    }
           label="Promociones"           
      />
      <FormControlLabel control={ <Switch checked ={nov}
         onChange={(e) => {
          setNov(e.target.checked)
        }} 
      />
      }
     label="Novedades" />
    </FormGroup>
         
      <Button variant="outlined" type='submit'>Registar</Button>
      </form>  
}

export default FormSignUp