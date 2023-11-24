import {
  Typography,
  AppBar,
  Container,
  Toolbar,
  Button,
  IconButton,
} from '@mui/material'

function NavBar() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Nuevos Usuarios
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Container>
  )
}

export default NavBar
