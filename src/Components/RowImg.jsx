import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import Spinner from "react-bootstrap/Spinner";

class RowImg extends Component {
  state = {
    searchResult: null,
  };

  // componentDidMount = async () => {
  //   const resFetch = await fetch("http://www.omdbapi.com/?apikey=abafd7f0&s=calcio");
  //   console.log(resFetch);
  //   let resJson = [];
  //   resJson = await resFetch.json();
  //   await this.setState({ arrFetch: resJson });
  // };

  componentDidMount = async () => {
    try {
      let searchFetch= this.props.fetch
      const response = await fetch("http://www.omdbapi.com/?apikey=abafd7f0&"+searchFetch);
      if (response.ok) {
        let data = await response.json();
        // console.log(data);
        this.setState({ searchResult: data.Search });
      } else {
        console.log("error" + response.status);
      }
    } catch (error) {
      console.log(error + "questo error");
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   // prevstate.arrFetch === 'undefined'? console.log("passato") : return;
  //   if (prevState.arrFetch !== this.state.arrFetch) {
  //     if (this.props.arrFetch !== []) {
  //       this.props.arrFetch !== [];
  //       this.setState({ arrFetch: resJson });

  //       // console.log(this.props.arrFetch.search[0]);
  //     }
  //   }
  // }

  render() {
    const cancel = this.state.searchResult;
    console.log("cancel=", cancel);
    if (!cancel) {
      return (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      );
    } else {
      return (
        <>
          <Container className="d-flex justify-content-start ms-3 mt-4 mb-3">
            <Row style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
              <Col className="xs-12">{this.props.title}</Col>
            </Row>
          </Container>
          <Container fluid className="ms-3">
            <Row>
              {this.state.searchResult.slice(0, 5).map((movie) => {
                return <SingleMovie movie={movie} />;
              })}
            </Row>
          </Container>
        </>
      );
    }
  }
}

export default RowImg;
