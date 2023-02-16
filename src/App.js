import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {Container ,Row} from "react-bootstrap";
import NavBarComp from './Components/NavBarComp';
import FooterComp from './Components/FooterComp';
import RowImg from './Components/RowImg';

function App() {
  return (
    <Container fluid className='bg-dark m-0 p-0' style={{height:'100vh', width: '100vw'}}>
      <NavBarComp/>
      <Container className='d-flex justify-content-start ms-4'>
      <Row className='xs-12' style = {{color:'white', fontSize:'25px', fontWeight: 'bold'}}>TV Show</Row>
      </Container>
      
      <RowImg title='Trending Now' fetch='s=black'/>   
      <RowImg title='Watch it Again' fetch='s=stranger'/>
      <RowImg title='New Releases' fetch='s=white&y=2022'/> 
      <FooterComp/>
    </Container>
  );
}

export default App;
