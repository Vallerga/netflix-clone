import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

class NavBarComp extends Component {
  render() {
    return (
      <>
        <Navbar className="pb-5" bg="dark" expand="lg">
          <Container>
            <Navbar.Brand className=" text-danger" href="#home">
              Netflix
            </Navbar.Brand>
            <Navbar.Toggle className=" text-light" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className=" text-light" id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className=" text-light" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className=" text-light" href="#link">
                  TV Shows
                </Nav.Link>
                <Nav.Link className=" text-light" href="#link">
                  Browser
                </Nav.Link>
                <NavDropdown title={<span className="text-light my-auto">Dropdown</span>} id="basic-nav-dropdown">
                  <NavDropdown.Item className=" text-dark" href="#action/3.1">
                    Movies
                  </NavDropdown.Item>
                  <NavDropdown.Item className=" text-dark" href="#action/3.2">
                    Recently Added
                  </NavDropdown.Item>
                  <NavDropdown.Item className=" text-dark" href="#action/3.3">
                    My List
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item className=" text-dark" href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default NavBarComp;
