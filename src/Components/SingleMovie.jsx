import { Component } from "react";
import { Col, Card } from "react-bootstrap";

class SingleMovie extends Component {
  
    portaAlGenitore = (product) => {
      console.log(product);
      this.props.prendiDalFiglio(product.id, product);
    };
  
    render() {
      return (
        <Col>
          <a href="this.props.movie.Poster"><Card className="generatedCard border-0" style={{ width: '20rem'}}>
            <Card.Img className="rounded-0" variant="top" src={this.props.movie.Poster} style={{height: '10rem', objectFit: 'cover'}}/>
          </Card></a>
        </Col>
      );
    }
  }
  
  export default SingleMovie;