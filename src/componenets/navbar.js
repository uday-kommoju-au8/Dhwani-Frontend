import React from "react"
import {Navbar} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';

const Nav=()=>{
    return(
        <>
<Navbar bg="dark" variant="dark">
  <Navbar.Brand href="/">Dhwani</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Developer: UdayKommoju
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
</>
    )
}

export default Nav