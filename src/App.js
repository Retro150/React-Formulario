import './App.css';
import  Container from '@mui/material/Container';
import FormSignUp from './Components/FormSignUp';
import Typography from '@mui/material/Typography';

const manejarEnvio = (Datos) => {
  console.log("Datos: ", Datos);
}

function App() {
  return (
   <Container component="div" maxWidth="sm">
     <Typography variant='h3' align='center'>Formulario Registro</Typography>
     <FormSignUp manejarEnvio={manejarEnvio} />
   </Container>
  );
}

export default App;
