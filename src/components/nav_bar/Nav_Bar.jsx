import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


export function Nav_Bar() {
  const [userLoginValue,  setUserLoginValue] = useState({})

  useEffect(() =>{
    let storageValue = JSON.parse(localStorage.getItem("user"))
    setUserLoginValue({...storageValue})
  },[])
    


  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Users Lists</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to={"/"} >Home</NavLink>
            <NavLink className="nav-link" to={"add_user"} >Add User</NavLink>
            
              {userLoginValue.name == null ? 
              <NavLink className="nav-link ms-lg-3 px-3 btn text-white bg-primary" to={"login"} >Login</NavLink>
              : <div className=" d-lg-flex align-items-center d-block gap-2"> 
                  <NavLink onClick={() => localStorage.clear()} className="nav-link ms-lg-3 px-3 btn text-white bg-danger" to={"login"} >Logout</NavLink>
                  <span className="text-white mt-3 d-block d-lg-inline mt-lg-0 fw-bold">hello: {userLoginValue.name}</span>
                </div>
              }
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
