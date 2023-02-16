import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class NavBarComp extends Component {
  render() {
    return (
      <>
        <Navbar className="pb-5" bg="dark" expand="lg">
          <Container>
            <Navbar.Brand className="hoverNetflix text-danger" href="#home">
              Netflix
            </Navbar.Brand>
            <Navbar.Toggle className="hoverSett" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className=" hoverSett" id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="hoverSett" href="#home">
                  Home
                </Nav.Link>
                <Nav.Link className="hoverSett" href="#link">
                  TV Shows
                </Nav.Link>
                <Nav.Link className="hoverSett" href="#link">
                  Movies
                </Nav.Link>
                <Nav.Link className="hoverSett" href="#link">
                  Recently Added
                </Nav.Link>
                <Nav.Link className="hoverSett" href="#link">
                  My List
                </Nav.Link>                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default NavBarComp;
