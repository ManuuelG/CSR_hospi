import { useState } from 'react'

import { TextField, Container, Button, Stack } from '@mui/material'

import { toast } from 'react-toastify'

import axios from 'axios'

function RegisterForm() {
  const [user, setUser] = useState({
    username: '',
    password: '',
    email: '',
  })

  const handleRegister = e => {
    e.preventDefault()
    axios
      .post('http://localhost:3000/api/users/register', user)
      .then(({ headers }) => {
        const authToken = headers['x-auth-token']
        console.log(authToken)

        localStorage.setItem('x-auth-token', authToken)
      })
      .catch(err => {
        let errorMessage = ''

        if (err.response.status === 400 || err.response.status === 500) {
          errorMessage = err.response.data.msg
        }

        console.error(errorMessage)
      })
  }

  const handleChange = ({ target: input }) => {
    setUser({ ...user, [input.name]: input.value })
  }
  return (
    <Container>
      {' '}
      <form onSubmit={handleRegister}>
        <Stack spacing={4} padding={10}>
          <TextField
            type="text"
            label="Nuevo Usuario"
            value={user.username}
            name="username"
            onChange={handleChange}
            required
          ></TextField>

          <TextField
            type="text"
            label="Contraseña"
            value={user.password}
            name="password"
            onChange={handleChange}
            required
          ></TextField>

          <TextField
            type="text"
            label="Email"
            value={user.email}
            name="email"
            onChange={handleChange}
            required
          ></TextField>
          <Button variant="contained" type="submit">
            Registrar
          </Button>
        </Stack>
      </form>
    </Container>
  )
}

export default RegisterForm
