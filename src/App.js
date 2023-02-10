import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarComp from './Components/NavBarComp';
import FooterComp from './Components/FooterComp';
import RowImg from './Components/RowImg';
import RowImg1 from './Components/RowImg1';
import RowImg2 from './Components/RowImg2';

function App() {
  return (
    <div className='bg-dark'>
      <NavBarComp/>
      <div style = {{color:'white', fontSize:'25px', fontWeight: 'bold'}}>TV Show</div>
      <RowImg/>
      <RowImg1/>
      <RowImg2/>
      <FooterComp/>
    </div>
  );
}

export default App;
