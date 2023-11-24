import './app.css'
import NavBar from './Components/AppBar/appbar'
import RegisterForm from './Components/RegisterForm/register'

import { Container } from '@mui/material'

function App() {
  return (
    <Container>
      <NavBar />
      <RegisterForm />
    </Container>
  )
}

export default App
