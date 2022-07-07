import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container } from 'react-bootstrap';
import {BrowserRouter, Route, Routes, useParams, Link} from 'react-router-dom'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Vajilla from './paginas/Vajilla';
import TazasyTazones from './paginas/TazasyTazones';
import Home from './paginas/Home';
import Carrito from './paginas/Carrito';
import Contact from './paginas/Contact';


function App() {
  const {categories} = useParams();
  const [producto, setProducto] = useState()
  
  return (
    <Container>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path= "/Vajilla" element= {<Vajilla/>} />
          <Route path= "/TazasyTazones" element= {<TazasyTazones/>} />
          <Route path= "/Carrito" element= {<Carrito/>} />
          <Route path= "/Contact" element= {<Contact/>} />
         </Routes>
        
        <Footer/>
      </BrowserRouter>
    </Container>
  );
}

export default App;
