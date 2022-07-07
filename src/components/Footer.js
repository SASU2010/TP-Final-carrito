import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Home from '../paginas/Home';
import '../components/Footer.css'

function Footer(){
  return(
    <Container>
    <div>
    <p className='footer'>Al navegar por este sitio aceptás el uso de cookies para agilizar tu experiencia de compra.</p> 
    <div className='boton'><Link to="/" {...<Home/>} ><button type="button" class="btn btn-outline-success">Entiendo</button></Link></div>
    <p className='copy'>© Copyright Caro A Handwork - 2022</p>
    </div>
    </Container>
  )
}

export default Footer;