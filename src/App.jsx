import './App.css'
import { Login } from './pages/Login'
import { Nav_Bar } from './components/nav_bar/Nav_bar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Add_User } from './pages/Add_User'
import { Container } from 'react-bootstrap'
import { Single_user } from './components/Single_user/Single_user'

function App() {
  
  return (
    <>
      <Nav_Bar/>
      <Container>
        <Routes>
        <Route path='/'element={<Home/>} />
        <Route path='add_user' element={<Add_User/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='single_user' element={<Single_user/>}/>
        </Routes>
      </Container>  
    </>
  )
}

export default App

