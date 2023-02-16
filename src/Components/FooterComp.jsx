import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

class FooterComp extends Component {

  render() {
    return (
      <>
        <Navbar className="pt-5" bg="dark d-flex align-content-end" expand="lg">
          <Container>
            <Navbar.Brand className="hoverUnderline" href="#home">
              Audio and SubtitlesService Code
            </Navbar.Brand>
            <Navbar.Toggle className="hoverUnderline" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="hoverUnderline" id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="hoverUnderline" href="#home">
                  Media Center
                </Nav.Link>
                <Nav.Link className="hoverUnderline" href="#link">
                  Privacy
                </Nav.Link>
                <Nav.Link className="hoverUnderline" href="#link">
                  Contact Us
                </Nav.Link>                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default FooterComp;