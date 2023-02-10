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
            <Navbar.Brand className="text-secondary" href="#home">
              Audio and SubtitlesService Code
            </Navbar.Brand>
            <Navbar.Toggle className="text-secondary" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="text-secondary" id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="text-secondary" href="#home">
                  Media Center
                </Nav.Link>
                <Nav.Link className="text-secondary" href="#link">
                  Privacy
                </Nav.Link>
                <Nav.Link className="text-secondary" href="#link">
                  Contact Us
                </Nav.Link>
                <NavDropdown title={<span className="text-secondary my-auto">Service Code</span>} id="basic-nav-dropdown">
                  <NavDropdown.Item className=" text-dark" href="#action/3.1">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item className=" text-dark" href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item className=" text-dark" href="#action/3.3">
                    Something
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
export default FooterComp;