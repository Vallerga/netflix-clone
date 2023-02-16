import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Container, Row, Col } from "react-bootstrap";
import NavBarComp from "./Components/NavBarComp";
import FooterComp from "./Components/FooterComp";
import RowImg from "./Components/RowImg";
import NavDropdown from "react-bootstrap/NavDropdown";

function App() {
  return (
    <Container fluid className="bg-dark m-0 p-0" style={{ height: "100vh", width: "100vw" }}>
      <NavBarComp />
      <Container className="d-flex justify-content-start ms-4">
        <Row  style={{ color: "white", fontSize: "25px", fontWeight: "bold" }}>
          TV Show
          <Col><NavDropdown bg="dark" title={<span className="hoverReverse my-auto">Genres</span>} id="basic-nav-dropdown">
            <NavDropdown.Item className=" text-dark" href="#action/3.1">
              Comedy
            </NavDropdown.Item>
            <NavDropdown.Item className=" text-dark" href="#action/3.2">
              Drama
            </NavDropdown.Item>
            <NavDropdown.Item className=" text-dark" href="#action/3.3">
              thriller
            </NavDropdown.Item>
          </NavDropdown></Col>
        </Row>
      </Container>

      <RowImg title="Trending Now" fetch="s=black" />
      <RowImg title="Watch it Again" fetch="s=stranger" />
      <RowImg title="New Releases" fetch="s=white&y=2022" />
      <FooterComp />
    </Container>
  );
}

export default App;
